import validate from 'express-validation'
import user from './user/validator'
import category from './category/validator'

function parse(object) {
  const data = {}
  for (const key of Object.keys(object)) {
    data[key] = validate(object[key])
  }
  return data
}

export default {
  user: parse(user),
  category: parse(category)
}
