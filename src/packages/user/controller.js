import service from './service'
import requestInfor from '../../utils/requestInfor'
import responseBuilder from  '../../utils/responseBuilder'
import to from '../../utils/to'

async function register(req, res) {
    switch (req.method) {
      case requestInfor.method.post:
        const [error, user] = await to(service.register(req.body))
        if (error) {
          res.jsonp(responseBuilder.build(responseBuilder.statusCode.error, {}, error.message))
        }
        res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, user, responseBuilder.message.success))
        break
      default:
        break
    }
}

export default {
  register,
}
