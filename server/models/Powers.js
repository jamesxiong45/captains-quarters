const { Schema, model } = require('mongoose');

const powersSchema = new Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 280,
    },
    activation: {
        type: Number,
        trim: true,
    },
    strain: {
        type: Number,
        trim: true,
    },
    range: {
        type: String,
    },
    description: {
        type: String,
    }
})

const Powers = model('Powers', powersSchema);

module.exports = Powers;