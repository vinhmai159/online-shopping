import express from 'express'
import CategoryController from './controller'
import paramValidator from '../validator'
import isAdmin from '../authentication/isAdmin'

const router = express.Router()

router.use('*', isAdmin)

/**
 * @api {get} /categories?page={page}&limit={limit}&search={search} Get all
 * @apiGroup Categories
 *
 * @apiName Get All
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Admin unique access-key.
 * @apiParam {Number} [page] `min = 1`
 * @apiParam {Number} [limit] `min = 1`
 * @apiParam {String} [search]
 */
router.get('/', paramValidator.category.validateGetAll, CategoryController.getAll)

/**
 * @api {post} /categories/ Store
 * @apiGroup Categories
 *
 * @apiName Store
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Admin unique access-key.
 * @apiParam {String} name
 */
router.post('/', paramValidator.category.validateCreate, CategoryController.store)

/**
 * @api {delete} /categories/categoryId Delete
 * @apiGroup Categories
 *
 * @apiName Delete
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Admin unique access-key.
 */
router.delete('/:categoryId', CategoryController.destroy)

/**
 * @api {get} /categories/categoryId Get detail
 * @apiGroup Categories
 *
 * @apiName Get detail
 *
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Admin unique access-key.
 */
router.get('/:categoryId', CategoryController.show)

export default router
