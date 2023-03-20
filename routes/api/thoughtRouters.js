const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require ('../../controllers/thoughts');

router.route('/', getThoughts);
router.route('createThought', createThought);
router.route('/:_id', getSingleThought);
router.route('/updateThought', updateThought);
router.route('deleteThought', deleteThought);


module.exports = router;