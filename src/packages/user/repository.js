import { User } from '../../models'

async function createUser(req) {
  return User.create(req)
}

async function findUser(optionFind = {}, optionGet = {}) {
  return User.findOne(optionFind, optionGet)
}
export default {
  createUser,
  findUser
}
