import { User } from '../../models'

async function createUser(req) {
  return User.create(req)
}

async function findUser(optionFind = {}, optionGet = {}) {
  return User.findOne(optionFind, optionGet)
}

async function findById(userId) {
    return User.findById(userId);
}

export default {
  createUser,
  findUser
}
