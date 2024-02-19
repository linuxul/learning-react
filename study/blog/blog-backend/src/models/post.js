const mongoose = require('mongoose')

const { Schema } = mongoose

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedData: {
    type: Date,
    default: Date.new
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post