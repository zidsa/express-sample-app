import { Router } from 'express';

import zidAuthRouter from './auth';

const zidRouter = Router();

/**
 * Auth Routes
 */
zidRouter.use('/auth', zidAuthRouter);


export default zidRouter;
