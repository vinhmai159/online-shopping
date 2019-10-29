import service from './service'
import responseBuilder from  '../../utils/responseBuilder'
import to from '../../utils/to'

const { error: errorCode, success: successCode } = responseBuilder.statusCode;
const { successMessage, notFoundMessage } = responseBuilder.message;
const buildRes = responseBuilder.build;

async function register(req, res) {
  const [error, user] = await to(service.register(req.body))
  if (error) {
    res.jsonp(buildRes(errorCode, {}, error.message))
  }
  res.jsonp(buildRes(successCode, user, successMessage))
}

async function login(req, res) {
  const [error, user] = await to(service.login(req.body))
  if (error) {
    res.jsonp(buildRes(errorCode, {}, error.message))
  }
  if (!user) {
    res.jsonp(buildRes(responseBuilder.statusCode.notFound, {}, notFoundMessage))
  }
  res.jsonp(buildRes(successCode, {user: user}, successMessage))
}

async function getCurrent(req, res) {
    res.jsonp(buildRes(successCode, req.user, successMessage));
}

export default {
  register,
  login,
  getCurrent,
}
