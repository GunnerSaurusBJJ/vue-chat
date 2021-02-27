const User = require('../models/User')

async function createUser (data) {
  try {
    const user = await User.updateOne(
      { email: data.email },
      data,
      { upsert: true }
    )
    return user
  } catch (error) {
    console.log(error)
  }
}

async function getUser (id) {
  try {
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createUser,
  getUser
}
