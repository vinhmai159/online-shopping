import repository from './repository'
import bcrypt from  '../../utils/bcrypt'
import queryBuilder from './queryBuilder'
import {User} from "../../models"

async function register(req) {
  req.password = await bcrypt.hashPassword(req.password)
  let user = await repository.createUser(req)
  return user
}

async function login(req) {
  let user = await repository.findUser({email: req.email}, {email: 1, role: 1, password: 1})
  let matchPassword = await bcrypt.compareHashedPassword(req.password, user.password)
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
