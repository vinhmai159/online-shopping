const express = require('express');
import UserController from './controller'
import paramValidator from '../validator'
import isAuth from '../middleware/isAuth';

const router = express.Router();

/**
 * @api {post} /users/ Register
 * @apiGroup Users
 *
 * @apiName Register
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email
 * @apiParam {String} password must be in md5 format
 */
router.post('/', paramValidator.user.validateRegister, UserController.register);

/**
 * @api {post} /users/login Login
 * @apiGroup Users
 *
 * @apiName Login
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email
 * @apiParam {String} password must be in md5 format
 */
router.post('/login', paramValidator.user.validateLogin, UserController.login);


/**
 * @api {get} /users/getCurrent Login
 * @apiGroup Users
 *
 * @apiName Get Current User
 *
 * @apiVersion 1.0.0
 *
 */
router.get('/currentUser', isAuth, UserController.getCurrent);


export default router
