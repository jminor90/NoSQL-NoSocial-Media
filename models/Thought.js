const mongoose = require('mongoose');
const dayjs = require('dayjs')

const reactionSchema = new mongoose.Schema({
  reactionID: {
    type: mongoose.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAt => dayjs(createdAt).format('MMM DD, YYYY [at] h:mm:ss a')
    //Use a getter method to format the timestamp on query
  }
},
{
  toJSON: {
    virtuals: true,
    getters:true
  },
}
)

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    // required: true, //commented this out because was giving errors when trying to seed database.
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAt => dayjs(createdAt).format('MMM DD, YYYY [at] h:mm:ss a')
    //Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
}
)

const Thought = mongoose.model('thought', thoughtSchema);
// const Reaction = mongoose.model('reaction', reactionSchema);

// Created a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = {Thought}