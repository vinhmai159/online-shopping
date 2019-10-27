import repository from './repository'
import bcrypt from  '../../utils/bcrypt'
import queryBuilder from './queryBuilder'
import {User} from "../../models"

async function register(req) {
  let { email, password } = req
  password = await bcrypt.hashPassword(password)
  let user = await repository.createUser({email, password})
  return user
}

async function login(req) {
  let { email, password } = req
  let user = await repository.findUser({email}, {email: 1, role: 1, password: 1})
  let matchPassword = await bcrypt.compareHashedPassword(password, user.password)
  if (matchPassword) {
    let token = await bcrypt.generateToken({
      _id: user._id,
      email: user.email,
      role: user.role,
      time: Date.now
    })

    user = await User.commonUserData(user.toJSON())
    user.token = token
    return user
  }
  return null
}

export default {
  register,
  login
}
