import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String
})

export const User = mongoose.models.User || mongoose.model('User', UserSchema)