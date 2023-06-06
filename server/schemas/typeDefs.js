const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }
    
    input Captain {
        name: String!
        background: ID
        firstMate: ID
        crewMembers: ID
        createdBy: ID
    }
    
    type Background {
        name: String
        stats: ID
        corePowers: ID
    }

    type FirstMate {
        name: String
        background: String
        stats: ID
        powers: ID
    }

    type CrewChoice {
        name: String
        stats: ID
        gear: ID
        soldierType: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        captains: ID
    }

    type Query {
        users: [User]
        user(username: String!): User
        captains(name: String): ID
        captain(captainId: ID): ID
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createCaptain(name: String!, background: ID, firstMate: ID, crewMembers: ID, createdBy: ID): ID
    }
`;

module.exports = typeDefs;