import express from 'express'
import UserController from './controller'
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
 * @apiParam {Number} [role] role of users, list acceptabe value: `1`, `2`, `3` (correcspond to `admin`, `editor`, `normal user`
 */
router.post('/', paramValidator.user.validateRegister, UserController.register)

export default router
