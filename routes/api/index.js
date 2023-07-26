const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes)
console.log('route connected for api/users');

module.exports = router;