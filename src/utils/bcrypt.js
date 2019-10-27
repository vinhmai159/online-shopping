import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import configs from '../configs'

async function hashPassword(password) {
    const salt = bcrypt.genSaltSync(5)
    return bcrypt.hashSync(password, salt)

}

async function compareHashedPassword(normalPassword, hashedPassword) {
    return bcrypt.compareSync(normalPassword, hashedPassword)
}

async function generateToken(payload) {
    let token = jwt.sign({ payload }, configs.secretKey);
    return token
}

export default {
    hashPassword,
    compareHashedPassword,
    generateToken
}