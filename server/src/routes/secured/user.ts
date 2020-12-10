import { Router } from "express";
import UserController from "../../controllers/UserController";

const routes = Router();


routes.post('/', UserController.save);
routes.get('/:uuid', UserController.findOne);
routes.put('/:uuid', UserController.update);
routes.delete('/:uuid', UserController.remove);

export default routes;