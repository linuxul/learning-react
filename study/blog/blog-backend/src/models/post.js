const mongoose = require('mongoose')

const { Schema } = mongoose

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedData: {
    type: Date,
    default: Date.now
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post