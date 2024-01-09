const { newDataValidation } = require('../Validation')
const { newUserCreation, isUserEmailExist } = require('../model/User/Service')

const createNewUser = async (req, res, next) => {
    try {
        const { error } = await newDataValidation(req.body)
        if (error) {
            return res.status(200).json({
                error: true,
                message: error.details[0].message
            })
        }

        const isEmailExist = await isUserEmailExist(req.body.email)
        if (isEmailExist) {
            return res.status(200).json({
                error: true,
                message: 'Email Address Already Exist. Please Try with another Email Address.'
            })
        }

        let reqUserObj = {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            gender: req.body.gender,
            dob: req.body.dob,
            age: req.body.age
        }

        const response = await newUserCreation(reqUserObj)
        if (response) {
            return res.status(201).json({
                error: false,
                message: 'User Data Saved Successfully! Thank You!!'
            })
        } else {
            return res.status(200).json({
                error: true,
                message: 'Unable to create/Save a new User Data!!'
            })
        }

    } catch (error) {
        next(error)
    }
}

module.exports = {
    createNewUser
}