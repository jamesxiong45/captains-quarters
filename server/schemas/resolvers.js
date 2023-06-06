const { AuthenticationError } = require('apollo-server-express');
const { User, Captain, Background, FirstMate, CrewChoice } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('captains');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('captains');
        },
        captains: async (parent, { name }) => {
            const params = name ? { name } : {};
            return Captain.find(params);
        },
        captain: async (parent, { captainId }) => {
            return Captain.findOne({ _id: captainId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError('Please log in before moving on')
        },
    },

    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
           },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError('No user found with that username, please try another.');
            }
            const pw = await user.isCorrectPassword(password);
            if (!pw) {
                throw AuthenticationError('The password or username is incorrect, please try again.');
            }
            const token = signToken(user);
            return { token, user };

            },

        createCaptain: async (parent, { name, background, firstMate, crewMembers, createdBy }, context) => {
            if (context.user) {
                const captain = Captain.create({
                    name,
                    background,
                    firstMate,
                    crewMembers,
                    createdBy
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { captains: captain._id}}
                );
                return captain;
                }
            } 
    }
};

module.exports = resolvers;





