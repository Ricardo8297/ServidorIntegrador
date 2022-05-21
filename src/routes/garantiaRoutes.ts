import { Router } from 'express';
import garantiaController from '../controllers/garantiaController';


//Como fue de ejemplo no se exporta toda la clase



class GarantiaRoutes{

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
        this.router.get('/',garantiaController.list);

        //un juego en especifico
        this.router.get('/:id',garantiaController.getOne);

        //Ruta metodo post
        this.router.post('/',garantiaController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',garantiaController.update);

        //Metodo delete
        this.router.delete('/:id',garantiaController.delete);


    }


}

const garantiaRoutes = new GarantiaRoutes();
//Estartacion de solo el enrutador
export default garantiaRoutes.router;