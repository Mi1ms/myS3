import { Router } from 'express';
import secured from './secured';

const routes = Router();
routes.use('/', secured);

export default routes;