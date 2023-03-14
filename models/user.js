const {schema, model, types } = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new schema({
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
    thoughts: [
        type: schema.types.objectID,
        ref: 'thought',
    ],
    friends: [{
        type: schema.types.onjectId,
        ref: user
    }]
});
const user = model("user", userSchema);

module.exports = user;