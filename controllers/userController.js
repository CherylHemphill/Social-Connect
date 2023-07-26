const { objectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// Aggregate to get the overall number of users
const totalUsers = async () => {
    const numberofUsers = await User.aggregate().count('userCount');
    return numberofUsers;
}

module.exports = {
// Get all users
async getUsers(req, res) {
    try {
        const users = await User.find();
        console.log('getUsers() for all users');
        const UserObj = {
            users,
            totalUsers: await totalUsers(),
        };
        res.json(UserObj);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
},
// Get single user by id
async getSingleUser(req, res) {
    try {
        const user = await User.findOne
        ({ _id: req.params.userId })
        .select('__v');
    if (!user) {
        return res.status(404).json
        ({ message: 'No user with that id' })
    }
    res.json({ user });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
},
// Post new user
async createUser (req, res) {
    try {
const user = await User.create(req.body);
res.json(user);
    } catch (err) {
res.status(500).json(err);
    }
},
// Update user by id

// Delete user by id

// Post add new friend to user

// Delete friend from user

};
