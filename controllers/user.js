const { user, thought } = require('../models');
module.exports = {

    getUsers(req, res) {
        user.find()
        .then((thought) => {
            res.json(thought)
        });
    },
    getOneUser(req, res) {
        user.findOne({_id: req.params.userId})
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
        user.create(req.body)
        .then((user) => res.json((user))
        .catch((err) => res.status(500).json(err)))
    }
}