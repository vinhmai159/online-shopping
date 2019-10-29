import express from 'express';
import imageController from './controller'
import paramValidator from '../validator';

const router = express.Router();
/**
 * @api {post} /image/upload upload
 * @apiGroup Image
 * @apiName upload
 * @apiversion 1.0.0
 * @apiparam {String} image_name
 * @apiFile {file} image
 */
router.post('/upload', imageController.upload);

/**
 * @api {get} /image/get   get image
 * @apiGroup Image
 * @apiName getImage
 * @apiversion 1.0.0
 * @apiparam {String} image_name
 */
router.get('/get', imageController.getImage);

export default router;