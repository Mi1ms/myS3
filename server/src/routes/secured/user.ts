import { Router } from "express";
import  * as jwt  from "jsonwebtoken";
import {UserController} from "../../controllers/UserController";

const router = Router();

// console.log(UserController.save);

// router.post('/', UserController);
// router.get('/', UserController);
// router.put('/', UserController);
// router.delete('/', UserController);

export default router;