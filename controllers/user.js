const { User, Thought } = require('../models');
module.exports = {

    getUsers(req, res) {
        User.find()
        .then((thought) => {
            res.json(thought)
        });
    },
    getOneUser(req, res) {
        User.findOne({_id: req.params.userId})
        .populate('thought')
        .populate('friends')
        .select('-__V')
        .then((user) => {
            if (!user){
                res.status(404).json;
                console.log(user);
            }
            else {
                res.json(user);
                
            }
        })
    },
    createNewUser (req, res) {
        User.create(req.body)
        .then((user) => res.json((user))
        .catch((err) => res.status(500).json(err)))
    },

    addFriend(req, res) {
User.findOneAndUpdate(
    { _id: req.params.userId },
    {username: req.body.username},
    {email: req.body.email},
    {new: true}

).then((user) => {
    if(!user){
        console.log('Unable to add friend!')
    }
    else {
        console.log('friend added!')
    }
})
    }


}