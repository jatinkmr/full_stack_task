const router = require('express').Router()
const Controller = require('../controller')

router.get('/', Controller.homePageController)

module.exports = router