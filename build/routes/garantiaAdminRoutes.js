"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const garantiaAdminController_1 = __importDefault(require("../controllers/garantiaAdminController"));
//Como fue de ejemplo no se exporta toda la clase
class GarantiaAdminRoutes {
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
        this.router.get('/', garantiaAdminController_1.default.list);
        //un juego en especifico
        this.router.get('/:id', garantiaAdminController_1.default.getOne);
        //Ruta metodo post
        this.router.post('/', garantiaAdminController_1.default.create);
        //Metodo put (actualizar)
        this.router.put('/:id', garantiaAdminController_1.default.update);
        //Metodo delete
        this.router.delete('/:id', garantiaAdminController_1.default.delete);
    }
}
const garantiaAdminRoutes = new GarantiaAdminRoutes();
//Estartacion de solo el enrutador
exports.default = garantiaAdminRoutes.router;
