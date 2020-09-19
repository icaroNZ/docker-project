import express from 'express';
import * as healthContoller from '../controllers/health.controller.js';

const router = express.Router();

router.get('/test', healthContoller.testReponse);

router.get('/healthcheck', healthContoller.ping);

export default router;
