import bcrypt from 'bcryptjs'

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(5)
    return bcrypt.hashSync(password, salt)

}

export default {
    hashPassword
}