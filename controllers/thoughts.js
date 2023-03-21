const { User, Thoughts} = require('../models');

module.exports = {
    getThoughts (req, res) {
        Thoughts.find({})
        .then((thought) => 
            res.json(thought))
            .catch((err) => res.status(500).json(err))
        },
    


getSingleThought (req, res) {
    Thoughts.findOne({_id: req.params._id})
    .then((thought) =>
    !thought ? res.status(404).json({message: 'doesnt exist'})
    :res.json(thought))
},

createThought(req, res) {
    Thoughts.create(req.body).then((thought) => res.json(thought))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
},

updateThought(req, res) {
    Thoughts.findOneAndUpdate(
        {_id: reactions.params._id},
        {runValidators: true, new: true}
    ) .then((thought) => !thought?res.status(404).json:res.json(thought))
},

deleteThought(req, res) {
    Thoughts.findOneAndDelete({_id: req.params._id})
    .then((thought) => !thought?res.status(404).json:res.json(thought))
}};