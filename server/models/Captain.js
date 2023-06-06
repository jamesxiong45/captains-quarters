const { Schema, model } = require('mongoose');
const User  = require('./User');
const Background = require('./Background');
const FirstMate = require('./FirstMate');
const CrewChoice = require('./CrewChoice');

const captainSchema = new Schema({
    name: {
        type: String,
    },
    background: [
        {
            type: Schema.Types.Mixed,
            ref: 'Background'
        },
    ],
    firstMate: [
        {
            type: Schema.Types.Mixed,
            ref: 'FirstMate'
        }
    ],
    crewMembers: [
        {
            type: Schema.Types.Mixed,
            ref: 'CrewChoice'
        }
    ],
    createdBy: [
        {
            type: Schema.Types.Mixed,
            ref: 'User'
        }
    ]
});

const Captain = model('Captain', captainSchema);

module.exports = Captain;