const Joi = require('joi')

const newDataValidation = data => {
    const dataSchema = Joi.object().keys({
        firstname: Joi.string().required().min(5).max(20),
        lastname: Joi.string().required().min(3).max(20),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
        country: Joi.number().required(),
        state: Joi.number().required(),
        city: Joi.number().required(),
        gender: Joi.number().required(),
        dob: Joi.date().required(),
        age: Joi.number().precision(2).required()
    })

    return dataSchema.validate(data)
}

module.exports = {
    newDataValidation
}