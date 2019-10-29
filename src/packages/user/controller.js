import service from './service'
import responseBuilder from  '../../utils/responseBuilder'
import to from '../../utils/to'

async function register(req, res) {
  const [error, user] = await to(service.register(req.body))
  if (error) {
    res.jsonp(responseBuilder.build(responseBuilder.statusCode.error, {}, error.message))
  }
  res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, user, responseBuilder.message.success))
}

async function login(req, res) {
  const [error, user] = await to(service.login(req.body))
  if (error) {
    res.jsonp(responseBuilder.build(responseBuilder.statusCode.error, {}, error.message))
  }
  if (!user) {
    res.jsonp(responseBuilder.build(responseBuilder.statusCode.notFound, {}, responseBuilder.message.notFound))
  }
  res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, {user: user}, responseBuilder.message.success))
}

async function getCurrent(req, res) {
    res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, req.user, responseBuilder.message.success));
}

export default {
  register,
  login,
  getCurrent,
}
