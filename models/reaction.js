const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema ({
    reaction:{
        Types: String,
        required: true,
    },
    username: {
        Types: String, 
        required: true,
    },
    createdAt: {
        Types: Date,
        default: Date.now,
    }
})

module.exports = reactionSchema