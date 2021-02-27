const { Router } = require('express')
const router = Router()
const authMiddleware = require('../middlewares/authMiddleware')
const userService = require('../services/users')

router.get('/', authMiddleware, async (req, res) => {
  res.status(200).send('Hello')
})

router.post('/', authMiddleware, async (req, res) => {
  try {
    const newUser = {
      email: req.locals.email,
      ...req.body
    }

    const user = await userService.createUser(newUser)
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params
    const user = await userService.getUser(id)
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
