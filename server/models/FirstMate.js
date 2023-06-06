const { Schema, model } = require('mongoose');

const firstmateSchema =  new Schema({
        name: {
            type: String,
        },
        background: {
            type: String,
        },
        stats: {
            type: Object,
        },
        powers: {
            type: Array,
        },
    }
);    

const FirstMate = model('FirstMate', firstmateSchema);

module.exports = FirstMate;