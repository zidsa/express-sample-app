import { Router } from 'express';
import {zidAuthRedirect} from "../../../controllers/zid/auth/redirect";
import {zidAuthCallback} from "../../../controllers/zid/auth/callback";


const zidAuthRouter = Router();

zidAuthRouter.get('/redirect', zidAuthRedirect);

zidAuthRouter.get('/callback', zidAuthCallback);

export default zidAuthRouter;
