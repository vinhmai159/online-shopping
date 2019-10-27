import { User } from '../../models'

async function createUser(req) {
  return User.create(req)
}

export default {
  createUser
}
