const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema ({
    reaction:{
        type: String,
        required: true,
    },
    username: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = reactionSchema