const { Schema, model } = require('mongoose');

const backgroundSchema =  new Schema ({
        name: {
            type: String,
        },
        stats: {
            type: Object,
        },
        corePowers: {
            type: Array,
        },
    }
)    

const Background = model('Background', backgroundSchema);

module.exports = Background;

