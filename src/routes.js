import { Router } from 'express'
import userRoute from './packages/user/route'
import apidocRoute from './packages/apidoc/route'

const apiPath = 'api/v1.0.0'

export default () => {
  const api = Router()

  api.use('/apidoc', apidocRoute)

  api.use(apiPath + '/users', userRoute)

  return api
}
