import Joi from 'joi'

export default {
  validateGetAll: {
    query: {
      page: Joi.number().min(1).label('page'),
      limit: Joi.number().min(1).label('limit')
    }
  },
  validateCreate: {
    body: {
      name: Joi.string().required().label('name')
    }
  }
}
