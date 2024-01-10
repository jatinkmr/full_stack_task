const router = require('express').Router()
const { homePageController, userFormController, userDataController } = require('../controller')

router.get('/', homePageController)
router.get('/user-form', userFormController)
router.get('/user-data', userDataController)

module.exports = router