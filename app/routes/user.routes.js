
//importing modules
const express = require('express')
const user_controller = require('../controllers/user.controller.js')
const { signup } = user_controller
const userAuth = require('../middleware/userAuth.js')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

module.exports = router