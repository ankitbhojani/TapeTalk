const Joi = require('joi')
var signUpSchema = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required().messages({
            "any.required":"Please enter user name"
        }),
        gender: Joi.string().required().messages({
            "any.required":"Please enter gender"
        }),
        email: Joi.string().email().required().messages({
            "any.required" : "Please enter email address",
            "string.email" : "Please enter a valid email",
        }),
        password: Joi.string().min(6).required().messages({
            "any.required" : "Please enter a password",
            "string.min" : "Password must be 6 characters long"
        }),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
            "any.required" : "Please enter confirm password",
            "string.ref" : "Password and confirm password should be matched",
        }),
    });
    validateRequest(req, next, schema);
}



function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

module.exports = signUpSchema;