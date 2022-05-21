import { Router } from 'express';
import reabastecimientoController from '../controllers/reabastecimientoController';
import reporteComprasController from '../controllers/reporteComprasController';


class ReabastecimientoRoutes{

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
        this.router.get('/',reabastecimientoController.list);

        //un juego en especifico
        this.router.get('/:id',reabastecimientoController.getOne);

        //Ruta metodo post
        this.router.post('/',reabastecimientoController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',reabastecimientoController.update);

        //Metodo delete
        this.router.delete('/:id',reabastecimientoController.delete);


    }


}


const reabastecimientoRoutes = new ReabastecimientoRoutes();
//Estartacion de solo el enrutador
export default reabastecimientoRoutes.router;