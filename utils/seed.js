const connection = require('../config/connection');
const { User, Thought } = require('../models');
const  { getUsers, getThoughts }  = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected Successfully!');
    // Performing the deleteMany function as to not repeatedly seed the same information
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = getUsers();
    const thoughts = getThoughts();

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);

    console.info(`~*-Database Seeded!-*~`);
    process.exit();
})
