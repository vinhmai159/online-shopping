import { Router } from 'express'
import userRoute from './packages/user/route'
import imageRoute from './packages/image/route'
import apidocRoute from './packages/apidoc/route'

const apiPath = '/api/v1.0.0'

export default () => {
  const api = Router()

  api.use('/apidoc', apidocRoute)

  api.use(apiPath + '/users', userRoute)

  api.use(apiPath + '/image', imageRoute)

  return api
}
