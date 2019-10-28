import service from './service'
import requestInfor from '../../utils/requestInfor'
import responseBuilder from  '../../utils/responseBuilder'
import to from '../../utils/to'

async function store(req, res) {
  const [error, category] = await to(service.createCategory(req.body))
  if (error) {
    res.jsonp(responseBuilder.build(responseBuilder.statusCode.error, {}, error.message))
  }
  res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, category, responseBuilder.message.success))
}

async function getAll(req, res) {
  const [error, data] = await to(service.getAllCategories(req.query))
  if (error) {
    res.jsonp(responseBuilder.build(responseBuilder.statusCode.error, {}, error.message))
  }
  res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, data, responseBuilder.message.success))
}

async function destroy(req, res) {
  const [error, data] = await to(service.deleteCategory(req.params))
  if (error) {
    let statusCode = (error.message === responseBuilder.message.notFound) ? responseBuilder.statusCode.notFound : responseBuilder.statusCode.error
    res.jsonp(responseBuilder.build(statusCode, {}, error.message))
  }
  res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, {}, responseBuilder.message.success))
}

async function show(req, res) {
  const [error, category] = await to(service.getDetailCategory(req.params))
  if (error) {
    let statusCode = (error.message === responseBuilder.message.notFound) ? responseBuilder.statusCode.notFound : responseBuilder.statusCode.error
    res.jsonp(responseBuilder.build(statusCode, {}, error.message))
  }
  res.jsonp(responseBuilder.build(responseBuilder.statusCode.success, category, responseBuilder.message.success))
}

export default {
  getAll,
  store,
  destroy,
  show
}
