"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const reporteComprasRoutes_1 = __importDefault(require("./routes/reporteComprasRoutes"));
const reabastecimientoRoutes_1 = __importDefault(require("./routes/reabastecimientoRoutes"));
const ventasRoutes_1 = __importDefault(require("./routes/ventasRoutes"));
const garantiaAdminRoutes_1 = __importDefault(require("./routes/garantiaAdminRoutes"));
const garantiaRoutes_1 = __importDefault(require("./routes/garantiaRoutes"));
const auth_1 = __importDefault(require("./middleware/auth"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        //Ejecucion de los settings del servidor
        this.config();
        this.routes();
    }
    config() {
        //Revision del puerto si exitiese uno debe usarse
        this.app.set('port', process.env.PORT || 3000);
        //Uso de morgan para la vista de las peticiones
        this.app.use((0, morgan_1.default)('dev'));
        //Uso de cors
        this.app.use((0, cors_1.default)());
        //Middleware para lectura de json
        this.app.use(express_1.default.json());
        //Por si se necesita enviar desde un formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
        this.app.use('/auth', authRoutes_1.default);
        this.app.use('/api/reportecompras', auth_1.default, reporteComprasRoutes_1.default);
        this.app.use('/api/reabastecimiento', auth_1.default, reabastecimientoRoutes_1.default);
        this.app.use('/api/ventas', auth_1.default, ventasRoutes_1.default);
        this.app.use('/api/garantiaadmin', auth_1.default, garantiaAdminRoutes_1.default);
        this.app.use('/api/garantia', auth_1.default, garantiaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
//Inicializacion del servidor
server.start();
