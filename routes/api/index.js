const router = require('express').Router();
const userRouters = require('./userRoutes');
const thoughtRouters = require('./thoughtRouters');


router.use('/thoughts', thoughtRouters);
router.use('/users', userRouters);

module.exports = router;