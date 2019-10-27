import Joi from 'joi'
import validator from '../../utils/validator'

export default {
  validateRegister: {
    body: {
      email: Joi.string().required().regex(validator.regex.email).label('email'),
      password: Joi.string().required().regex(validator.regex.password).label('password'),
    }
  },
  validateLogin: {
    param: {
      email: Joi.string().required().regex(validator.regex.email).label('email'),
      password: Joi.string().required().regex(validator.regex.password).label('password'),
    }
  }
}
