// import mongo connection
const connection = require('../config/connection');
// import models to be seeded
const { User, Thought } = require('../models');
const { getRandomuser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

// Delete collection if they exit
let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
if (userCheck.length) {
    await connection.dropCollection('users');
}

// Create empty array to hold users
const users = [];

// Loop 15 times to add users to array
for (let i = 0; i < 4; i++) {
const thoughts = getRandomThoughts(4);
}
});
