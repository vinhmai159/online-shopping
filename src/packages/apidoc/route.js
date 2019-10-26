import express from 'express'
import ApidocController from './controller'

const router = express.Router()

router.get('/v1.0.0', [], ApidocController.show)

export default router
