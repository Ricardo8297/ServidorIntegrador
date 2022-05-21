import { Router } from 'express';
import garantiaAdminController from '../controllers/garantiaAdminController';


//Como fue de ejemplo no se exporta toda la clase



class GarantiaAdminRoutes{

    public router: Router = Router();

    constructor(){
        //Uso de los enrutadores
        this.config();   
    }


    //Definición de las rutas
    config(): void{
        //Metodo Get
        //.index es el metodo del controlador
        //listamos todos los juegos
        this.router.get('/',garantiaAdminController.list);

        //un juego en especifico
        this.router.get('/:id',garantiaAdminController.getOne);

        //Ruta metodo post
        this.router.post('/',garantiaAdminController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',garantiaAdminController.update);

        //Metodo delete
        this.router.delete('/:id',garantiaAdminController.delete);


    }


}

const garantiaAdminRoutes = new GarantiaAdminRoutes();
//Estartacion de solo el enrutador
export default garantiaAdminRoutes.router;