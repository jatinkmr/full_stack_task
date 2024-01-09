const router = require('express').Router()
const { createNewUser } = require('../controller/userController')

router.post('/create', createNewUser)

module.exports = router