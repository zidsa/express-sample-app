import { Router } from 'express';

import zid from './zid/';

const router = Router();

router.use('/zid', zid);

export default router;
