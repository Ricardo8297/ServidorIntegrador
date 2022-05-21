"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
//Credenciales del servidor
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//Empezamos a emviarle los metodos usando promises
pool.getConnection()
    //Cuando inicie aceptamos una conexion
    .then(connection => {
    //Si esta existe entonces
    pool.releaseConnection(connection);
    console.log('DB its run');
});
exports.default = pool;
