import express from 'express'
import responseBuilder from '../../utils/responseBuilder'
import bcrypt from '../../utils/bcrypt'
import {User} from '../../models'
import userService from '../user/service'

const router = express.Router()

router.use(async (req, res, next) => {
    const token = req.headers.authorization
    try {
        let user = await bcrypt.decodeToken(token)
        user = await userService.isValidUser(user)

        if (user && user.role === User.userRole.admin) {
            next()
        } else {
            res.jsonp(responseBuilder.build(responseBuilder.statusCode.unauthorized, {}, responseBuilder.message.unauthorized))
        }
    } catch (e) {
        res.jsonp(responseBuilder.build(responseBuilder.statusCode.unauthorized, {}, responseBuilder.message.unauthorized))
    }
})

export default router
