const {schema, model} = require('mongoose');
const thoughts = require('../controllers/thoughts');
const Reaction  = require('./reaction');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        max_length: 250
    },
    created: {
        type: Date,
        default: Date.now()
    },
    username: {
        type:String,
        required: true
    },
reactions: [Reaction]},
{
    toJSON: {
        virtuals: true,
        getters: true

    },
    id: false });


thoughtSchema.virtual('reaction').get(function () {
    return this.reactions.length;
})

module.exports = model('thoughts', thoughtSchema)