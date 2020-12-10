import AuthController  from '../../controllers/AuthController';
import { Router } from 'express';

const routes = Router();

// sign
routes.post('/sign-in', AuthController.signIn)
routes.post('/sign-up', AuthController.signUp)
routes.post('forgot-password', AuthController.forgotPassword)

export default routes;