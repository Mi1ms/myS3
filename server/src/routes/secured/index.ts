import { Router } from 'express';
import user from './user';
import auth from  './auth';

const routes = Router();
// users
routes.use('users/:uuid', user);


routes.use('/', auth);

// bucket 
// routes.use('users/:user_uuid/buckets', )

// blobs


export default routes;