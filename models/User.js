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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    }
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
},
{
  toJSON: {
    virtuals: true
  }
}
);

const User = mongoose.model('user', userSchema)

/*
Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
*/
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


module.exports = User