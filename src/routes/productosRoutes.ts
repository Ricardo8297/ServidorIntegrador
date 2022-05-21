import { Router } from 'express';

import productosController from '../controllers/productosController';

//Como fue de ejemplo no se exporta toda la clase



class ProductosRoutes{

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
        this.router.get('/',productosController.list);

        //un juego en especifico
        this.router.get('/:id',productosController.getOne);

        //Ruta metodo post
        this.router.post('/',productosController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',productosController.update);

        //Metodo delete
        this.router.delete('/:id',productosController.delete);


    }


}

const productosRoutes = new ProductosRoutes();
//Estartacion de solo el enrutador
export default productosRoutes.router;