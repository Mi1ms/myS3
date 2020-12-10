import { Router } from 'express';
import user from './user';
import auth from  './auth';
import passport from 'passport';

const routes = Router();

// router users
routes.use('/users', user);
// router Auth
routes.use('/', auth);
// router bucket 
// routes.use('users/:user_uuid/buckets', )

// blobs


export default routes;