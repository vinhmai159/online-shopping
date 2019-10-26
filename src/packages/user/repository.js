import { User } from '../../models'

async function createUser(body) {
  return User.create(body)
}

export default {
  createUser
}
