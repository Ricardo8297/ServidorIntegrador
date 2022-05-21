import { Router } from 'express';

//Como fue de ejemplo no se exporta toda la clase
import  gamesController  from '../controllers/gamesController'


class GamesRoutes{

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
        this.router.get('/',gamesController.list);

        //un juego en especifico
        this.router.get('/:id',gamesController.getOne);

        //Ruta metodo post
        this.router.post('/',gamesController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',gamesController.update);

        //Metodo delete
        this.router.delete('/:id',gamesController.delete);


    }


}

const gamesRoutes = new GamesRoutes();
//Estartacion de solo el enrutador
export default gamesRoutes.router;