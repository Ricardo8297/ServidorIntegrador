import { Router } from 'express';

//Como fue de ejemplo no se exporta toda la clase
import ventasController from '../controllers/ventasController';


class VentasRoutes{

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
        this.router.get('/',ventasController.list);

        //un juego en especifico
        this.router.get('/:id',ventasController.getOne);

        //Ruta metodo post
        this.router.post('/',ventasController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',ventasController.update);

        //Metodo delete
        this.router.delete('/:id',ventasController.delete);


    }


}

const ventasRoutes = new VentasRoutes();
//Estartacion de solo el enrutador
export default ventasRoutes.router;