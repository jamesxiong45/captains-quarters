const { Schema, model } = require('mongoose');

const crewSchema =  new Schema({
        name: {
            type: String,
        },
        stats: {
            type: Object,
        },
        gear: {
            type: Array,
        },
        soldierType: {
            type: String,
        }
    }
)    

const CrewChoice = model('CrewChoices', crewSchema);

module.exports = CrewChoice;

