"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Como fue de ejemplo no se exporta toda la clase
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
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
        this.router.get('/', gamesController_1.default.list);
        //un juego en especifico
        this.router.get('/:id', gamesController_1.default.getOne);
        //Ruta metodo post
        this.router.post('/', gamesController_1.default.create);
        //Metodo put (actualizar)
        this.router.put('/:id', gamesController_1.default.update);
        //Metodo delete
        this.router.delete('/:id', gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
//Estartacion de solo el enrutador
exports.default = gamesRoutes.router;
