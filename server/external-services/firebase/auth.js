const admin = require('./admin')

async function verifyToken (token) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    return decodedToken
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  verifyToken
}
