import { Router } from 'express';
import secured from './secured';

const routes = Router();

// user + bucket + blob
routes.use('/', secured);

export default routes;