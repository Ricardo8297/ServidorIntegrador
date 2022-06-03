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
exports.authController = void 0;
//Uso de la DB
const database_1 = __importDefault(require("../database"));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';
const DuserB = "SELECT * FROM usuarios WHERE nombre=?";
const userI = "INSERT INTO usuarios (nombre,contraseña,tipo_usuario,apellidop,apellidom,direccion,telefono,email) VALUES (?,?,3,?,?,?,?,?)";
class AUTHController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //ejecucion de la consulta asincrona 
            const games = yield database_1.default.query('SELECT * from usuarios');
            //devolucion al cliente en forma de json
            res.json(games);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE id = ?', [id]);
            res.json({ Message: 'Usuario Eliminado' });
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { names, passw, passwc, apellidop, apellidom, direccion, telefono, email } = req.body;
                const user = yield database_1.default.query(DuserB, [names]);
                if (user.length > 0) {
                    //res.json({ text: 'Usuario reg' });
                    res.status(409).send({ message: 'Usuario ya registrado' });
                }
                else {
                    if (passw != passwc) {
                        //res.json({ text: 'Usuario o contraseña incorrecta' });
                        res.status(409).send({ message: 'Las contraseñas no coinciden' });
                    }
                    else {
                        const passwEncry = bcrypt.hashSync(passw, 10);
                        yield database_1.default.query(userI, [names, passwEncry, apellidop, apellidom, direccion, telefono, email]);
                        const newUserConsult = yield database_1.default.query(DuserB, [names]);
                        const expiresIn = 24 * 60 * 60;
                        const accessToken = yield jwt.sign({ id: newUserConsult[0].id }, SECRET_KEY, {
                            expiresIn: expiresIn
                        });
                        const dataUser = {
                            name: newUserConsult[0].nombre,
                            typeUser: newUserConsult[0].tipo_usuario,
                            accessToken: accessToken,
                            expiresIn: expiresIn
                        };
                        // response 
                        res.send({ dataUser });
                        //res.json(dataUser); 
                    }
                }
            }
            catch (err) {
                console.log('Error: ', err);
                //res.json({ text: 'Error 404' });
                res.status(500).send('Server error!');
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { names, passw } = req.body;
                const user = yield database_1.default.query(DuserB, [
                    names
                ]);
                if (user.length > 0) {
                    if (!bcrypt.compareSync(passw, user[0].contraseña)) {
                        //res.json({ text: 'Usuario o contraseña incorrecta' });
                        res.status(409).send({ message: 'Usuario o contraseña incorrecta' });
                    }
                    else {
                        const expiresIn = 24 * 60 * 60;
                        /*const expiresIn = 10;*/
                        const accessToken = yield jwt.sign({ id: user[0].id }, SECRET_KEY, {
                            expiresIn: expiresIn
                        });
                        //console.log(accessToken);
                        const dataUser = {
                            name: user[0].nombre,
                            typeUser: user[0].tipo_usuario,
                            accessToken: accessToken,
                            expiresIn: expiresIn
                        };
                        // response 
                        res.send({ dataUser });
                        //res.json(dataUser); 
                    }
                }
                else {
                    //res.json({ text: 'Usuario o contraseña incorrecta' });
                    res.status(409).send({ message: 'Usuario o contraseña incorrecta' });
                }
            }
            catch (err) {
                //console.log('Error: ', err.message);
                //res.json({ text: 'Error 404' });
                res.status(500).send('Server error!');
            }
        });
    }
    validateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.body.dataUser.accessToken;
            try {
                yield jwt.verify(token, SECRET_KEY);
                const dataUser = {
                    accessToken: token,
                };
                // response 
                res.send({ dataUser });
            }
            catch (err) {
                res.status(401).send({ message: 'ERROR: ' + err });
            }
        });
    }
}
exports.authController = new AUTHController();
