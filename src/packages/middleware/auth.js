import bcrypt from '../../utils/bcrypt';
import userRepository from '../user/repository';

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = await bcrypt.decodeToken(token);
    try {
        const user = await userRepository.findUser({ _id: data._id });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' });
    }

};
module.exports = auth;
