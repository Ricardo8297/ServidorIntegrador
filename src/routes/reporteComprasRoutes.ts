import { Router } from 'express';
import reporteComprasController from '../controllers/reporteComprasController';


class ReporteComprasRoutes{

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
        this.router.get('/',reporteComprasController.list);

        //un juego en especifico
        this.router.get('/:id',reporteComprasController.getOne);

        //Ruta metodo post
        this.router.post('/',reporteComprasController.create);

        //Metodo put (actualizar)
        this.router.put('/:id',reporteComprasController.update);

        //Metodo delete
        this.router.delete('/:id',reporteComprasController.delete);


    }


}


const reporteComprasRoutes = new ReporteComprasRoutes();
//Estartacion de solo el enrutador
export default reporteComprasRoutes.router;