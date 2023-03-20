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
    },
    username: {
        type:String,
        required: true
    },
    {
        reactions: [reactionSchema],
    },{
    toJSON: {
        getters: true,
        virtuals: true
    }},{
        id: false
    },

});

thoughtSchema.virtual('reaction').get(function () {
    return this.reactions.length;
})