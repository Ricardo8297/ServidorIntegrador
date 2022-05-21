"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos el controller
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //Uso de los enrutadores
        this.config();
    }
    //Definición de las rutas
    config() {
        //.index es el metodo del controlador 
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
//Estartacion de solo el enrutador
exports.default = indexRoutes.router;
