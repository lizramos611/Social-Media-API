const {schema, model} = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
})