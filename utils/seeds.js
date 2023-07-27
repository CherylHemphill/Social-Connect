// import mongo connection
const connection = require('../config/connection');
// import models to be seeded
const { User, Thought } = require('../models');
const { getRandomuser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to seeds file');

// Delete collection if they exit
let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
if (userCheck.length) {
    await connection.dropCollection('users');
}

// Function to seed the database with users and thoughts
const seedDatabase = async () => {
  try {
    //  Create users and save them to the database
    const users = [];
    for (const userData of getRandomuser()) {
      const user = new User({
        username: userData.user,
        email: userData.email,
      });
      const savedUser = await user.save();
      users.push(savedUser);
    }

    //  Assign thoughts to each user and save them to the database
    for (const user of users) {
      const thoughts = getRandomThoughts();
      for (const thoughtData of thoughts) {
        const thought = new Thought({
          thoughtText: thoughtData.thoughtText,
          username: user._id, 
        });
        await thought.save();
        user.thoughts.push(thought._id); 
      }
      await user.save(); 
    }

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};
seedDatabase();
});

