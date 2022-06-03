"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reporteComprasController_1 = __importDefault(require("../controllers/reporteComprasController"));
class ReporteComprasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //Uso de los enrutadores
        this.config();
    }
    //Definición de las rutas
    config() {
        //Metodo Get
        //.index es el metodo del controlador
        //listamos todos los juegos
        this.router.get('/', reporteComprasController_1.default.list);
        //un juego en especifico
        this.router.get('/:id', reporteComprasController_1.default.getOne);
        //Ruta metodo post
        this.router.post('/', reporteComprasController_1.default.create);
        //Metodo put (actualizar)
        this.router.put('/:id', reporteComprasController_1.default.update);
        //Metodo delete
        this.router.delete('/:id', reporteComprasController_1.default.delete);
        //Busqueda
        this.router.post('/buscar/uno', reporteComprasController_1.default.busqueda);
    }
}
const reporteComprasRoutes = new ReporteComprasRoutes();
//Estartacion de solo el enrutador
exports.default = reporteComprasRoutes.router;
