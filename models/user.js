const {Schema, model, types } = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: stringify,
        required: true,
        unique: true,
    },
    thoughts: [{
        type: Schema.Types.ObjectID,
        ref: 'Thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});
const user = model("user", userSchema);

module.exports = user;