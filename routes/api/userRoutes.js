const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createNewUser,
    addFriend,
} = require('../../controllers/user');

router.route('/', getUsers);
router.route('/:_id', getOneUser);
router.route('/createNewUser', createNewUser);
router.route('/addFriend', addFriend);

module.exports = router; 