import express from 'express'
import UserCtrl from './controller'
import paramValidator from '../validator'

const router = express.Router()

/**
 * @api {post} /register Register
 * @apiGroup Users
 *
 * @apiName Register
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email
 * @apiParam {String} password must be in md5 format
 */
router.post('/register', paramValidator.user.validateRegister, UserCtrl.register)

export default router
