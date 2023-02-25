const {Types} = require('mongoose')

const names = [
  'Joshua Minor', // [0]
  'Chris Simmonds', // [1]
  'Kiana Minor', // [2]
  'Zach Minor', // [3]
]


const usernames = [
  'jminor90', // [0]
  'Christoph551', // [1]
  'kMinor99', // [2]
  'zMinor90', // [3]
]


const email = [
  'joshua@email.com', // [0]
  'chris@email.com', // [1]
  'kiana@email.com', // [2]
  'zach@email.com', // [3]
]


const thoughts = [
  `I Love the Legend of Zelda!`, // [0]
  `Can't wait to go to visit Italy!`, // [1]
  `Going to a concert tonight!`, // [2]
  `Florida is so much warmer than Missouri!`, // [3]
]


const reactions = [
  {reactionId: new Types.ObjectId(), username:'zMinor90', reactionBody: `Do you like Majora's Mask or Ocarina of time more?`}, // [0]
  {reactionId: new Types.ObjectId(), username:'kMinor99', reactionBody: `What part of Italy are you going to?`}, // [1]
  {reactionId: new Types.ObjectId(), username:'Christoph551', reactionBody: `Nice, just got my tickets for Ghastly!`}, // [2]
  {reactionId: new Types.ObjectId(), username:'jminor90', reactionBody: `Meet me in St. Louis!`}, // [3]
]


// Function to get all users
function getUsers() {
  return names.map((name, index) => ({
    name,
    username: usernames[index],
    email: email[index],
  }));
}

// Function to get all thoughts
function getThoughts() {
  return thoughts.map((thought, index) => ({
    thought,
    reactions: reactions[index],
  }));
}

module.exports = {
  getUsers,
  getThoughts,
}
