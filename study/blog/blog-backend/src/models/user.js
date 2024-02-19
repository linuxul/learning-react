const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  hashedPassword: String
});

UserSchema.methods.setPassword = async function (password) {
  console.log('setPassword : ' + password)

  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;

  console.log('setPassword #1 : ' + hash)
  console.log('setPassword #2 : ' + this.hashedPassword)
};

UserSchema.methods.checkPassword = async function (password) {
  console.log('checkPassword : ' + password)

  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

UserSchema.methods.serialize = function() {
  const data = this.toJSON()
  delete data.hashedPassword
  return data
}

const User = mongoose.model('User', UserSchema);
module.exports = User;
