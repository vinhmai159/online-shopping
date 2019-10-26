import { User } from '../../models'
import repo from './repository'

async function signupUser(body) {
  let user = await repo.createUser(body)
  user = await User.commonUserData(user.toJSON())
  return user
}

export default {
  signupUser
}
