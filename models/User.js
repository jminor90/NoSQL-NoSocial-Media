const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trimmed: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trimmed: true,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
});

/*
Schema Settings

Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
*/
module.exports = userSchema