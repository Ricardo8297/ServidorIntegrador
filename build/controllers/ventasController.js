"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Uso de la DB
const database_1 = __importDefault(require("../database"));
class VentasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //ejecucion de la consulta asincrona 
            const games = yield database_1.default.query('SELECT * from ventas');
            //devolucion al cliente en forma de json
            res.json(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //Se guarda en una constante si tiene un uso el arreglo
            const games = yield database_1.default.query('SELECT * from ventas WHERE id = ?', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'No existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO ventas set ?', [req.body]);
            res.json({ Message: 'venta Guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //Desde req..body va a enviar el conjunto de datos
            yield database_1.default.query('UPDATE ventas set ? WHERE id = ?', [req.body, id]);
            res.json({ Message: 'venta Actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ventas WHERE id = ?', [id]);
            res.json({ Message: 'venta Eliminada' });
        });
    }
    busqueda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha1, fecha2 } = req.body;
            const games = yield database_1.default.query('SELECT * FROM ventas WHERE fecha BETWEEN ? AND ?', [fecha1, fecha2]);
            res.json(games);
        });
    }
}
//Exportar solo "una"
const ventasController = new VentasController();
exports.default = ventasController;
