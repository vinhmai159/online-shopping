import express from 'express'
import responseBuilder from '../../utils/responseBuilder'
import { User } from '../../models'
import isAuth from './isAuth';

const router = express.Router()

router.use(isAuth, async (req, res, next) => {
    const  user  = req.user;
    if (user && user.role === User.userRole.admin) {
        next();
    } else {
        res.jsonp(responseBuilder.build(responseBuilder.statusCode.unauthorized, {}, responseBuilder.message.unauthorized))
    }
});

export default router
