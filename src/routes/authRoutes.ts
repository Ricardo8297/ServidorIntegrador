import { Router } from 'express';

import {authController} from '../controllers/authController';

class AUTHRoutes{
public router : Router=Router();

constructor(){
    this.config();
}
config(): void{
    this.router.post('/login',authController.loginUser);
    this.router.post('/register',authController.createUser);
    this.router.post('/validate_token', authController.validateToken);
    
    this.router.get('/',authController.list);
    this.router.delete('/:id',authController.delete);
    this.router.get('/:id',authController.banear);
}

}
const authRoutes=new AUTHRoutes();
export default authRoutes.router;