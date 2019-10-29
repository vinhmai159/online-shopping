import express from 'express'
import bcrypt from '../../utils/bcrypt';
import userRepository from '../user/repository';
import responseBuilder from '../../utils/responseBuilder'
import to from '../../utils/to'

const router = express.Router()

router.use(async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = await bcrypt.decodeToken(token);
    try {
        const [error, user] = await to(userRepository.findUser({ _id: data._id , email: data.email }));
        if (error) {
            res.jsonp(responseBuilder.build(responseBuilder.statusCode.unauthorized, {}, responseBuilder.message.unauthorized))
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.jsonp(responseBuilder.build(responseBuilder.statusCode.unauthorized, {}, responseBuilder.message.unauthorized))
    }
});
export default router;
