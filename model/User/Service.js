const dataBase = require('../index')
const User = dataBase.user

const newUserCreation = async reqUserObj => {
    return await User.create(reqUserObj)
}

const isUserEmailExist = async email => {
    let isUserExist = await User.findOne({
        where: {
            email
        }
    })

    if (isUserExist) {
        return true
    } else {
        return false
    }
}

module.exports = {
    newUserCreation,
    isUserEmailExist
}