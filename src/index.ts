import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import productosRoutes from './routes/productosRoutes';
import reporteComprasRoutes from './routes/reporteComprasRoutes';
import reabastecimientoRoutes from './routes/reabastecimientoRoutes';
import ventasRoutes from './routes/ventasRoutes';
import garantiaAdminRoutes from './routes/garantiaAdminRoutes';
import garantiaRoutes from './routes/garantiaRoutes';
import isAuth from './middleware/auth';
import authRoutes from './routes/authRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        //Ejecucion de los settings del servidor
        this.config();
        this.routes();
    }

    config(): void{
        //Revision del puerto si exitiese uno debe usarse
        this.app.set('port', process.env.PORT || 3000);
        //Uso de morgan para la vista de las peticiones
        this.app.use(morgan('dev'));
        //Uso de cors
        this.app.use(cors());
        //Middleware para lectura de json
        this.app.use(express.json());
        //Por si se necesita enviar desde un formulario html
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        this.app.use('/api/productos',productosRoutes);
        this.app.use('/auth', authRoutes);
        this.app.use('/api/reportecompras',isAuth,reporteComprasRoutes);      
        this.app.use('/api/reabastecimiento',isAuth,reabastecimientoRoutes);  
        this.app.use('/api/ventas',ventasRoutes);
        this.app.use('/api/garantiaadmin',isAuth,garantiaAdminRoutes);
        this.app.use('/api/garantia',garantiaRoutes);
    }


    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port',this.app.get('port'));
        });
    }


}

const server = new Server();
//Inicializacion del servidor
server.start();