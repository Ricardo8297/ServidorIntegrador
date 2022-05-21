import { Router } from 'express';
//importamos el controller
import { indexController } from '../controllers/indexController'

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        //Uso de los enrutadores
        this.config();   
    }


    //Definición de las rutas
    config(): void{
        //.index es el metodo del controlador 
        this.router.get('/',indexController.index);
    }

}

const indexRoutes = new IndexRoutes();
//Estartacion de solo el enrutador
export default indexRoutes.router;