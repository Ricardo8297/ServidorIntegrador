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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';
function isAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                console.log("2");
                yield jwt.verify(token, SECRET_KEY);
                next();
            }
            catch (error) {
                res.status(401).send({ message: 'ERROR: ' + error });
            }
        }
        else {
            res.status(401).send({ message: 'ERROR ' });
        }
    });
}
exports.default = isAuth;
