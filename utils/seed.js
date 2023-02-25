const connection = require('../config/connection');
const { User, Thought } = require('../models');
const  { getUsers, getThoughts }  = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected Successfully!');
    // Performing the deleteMany function as to not repeatedly seed the same information
    await User.deleteMany({});
    await Thought.deleteMany({});

    const userThoughts = [];
    // const friendsArray = [];

    const users = getUsers();
    const thoughts = getThoughts();

    
    for (let i=0; i<=3; i++) {
        const newThought = await Thought.create({
            ...thoughts[i],
            username: users[i].username
        });

        userThoughts.push({
            ...users[i],
            thoughts: [newThought._id]
        })
    }

    //Loop to add friends, can't get figured out at this time
    // for (let i=0; i<=3; i++) {
    //     const newFriend = await User.create({
    //         ...users[i],
    //         friends: users[i].username
    //     })

    //     friendsArray.push({
    //         ...users[i],
    //         friends: [newFriend._id]
    //     })

    // }

    await User.insertMany(userThoughts);
    // await Thought.collection.insertMany(thoughts);
    // await User.insertMany(friendsArray);
    // console.table(users);
    console.table(userThoughts);

    console.info(`~*-Database Seeded!-*~`);
    process.exit();
})
