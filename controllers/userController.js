const { objectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// Aggregate to get the overall number of users
const totalUsers = async () => {
    const numberofUsers = await User.aggregate().count('userCount');
    return totalUsers;
}

module.exports = {
// Get all users
async getUsers(req, res) {
    try {
        const users = await User.find();
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

// Post new user

// Update user by id

// Delete user by id

// Post add new friend to user

// Delete friend from user

};