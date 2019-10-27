import repository from './repository'
import bcrypt from  '../../utils/bcrypt'

async function register(req) {
  req.password = bcrypt.hashPassword(req.password)
  let user = await repository.createUser(req)
  return user
}

export default {
  register
}
