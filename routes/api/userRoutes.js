const router = require('express').Router();
const
 { getUsers,
    getSingleUser,
    createUser,
 } = require('../../controllers/userController');

// api/users
router.route('/').get(getUsers).post
(createUser);
console.log('connected to route from userRoutes to get all and create');

// api/user/:userId
router.route('/:userId').get
(getSingleUser);
console.log('route to get user by id');

module.exports = router;