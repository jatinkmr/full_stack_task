const { fetchUserData } = require('../model/User/Service')

const homePageController = async (req, res, next) => {
    try {
        res.render('home', {
            layout: false
        })
    } catch (error) {
        next(error)
    }
}

const userFormController = async (req, res, next) => {
    try {
        res.render('form', {
            layout: false
        })
    } catch (error)  {
        next(error)
    }
}

const userDataController = async (req, res, next) => {
    try {
        let data = await fetchUserData()
        let dataList = (data && data.length) ? data : []
        res.render('userData', {
            layout: false,
            data: dataList
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    homePageController,
    userFormController,
    userDataController
}
