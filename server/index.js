const express = require('express')
const mongoose = require('mongoose')
const { url } = require('./config/db')
const app = express()
const UserController = require('./routes/user')

const ROUTES = {
  users: '/api/users'
}

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('ASFASFAFASFAFASFASFASFAFSAFFS'))
  .catch(err => console.log(err))

const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(ROUTES.users, UserController)

app.listen(PORT)
