"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class AUTHRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/login', authController_1.authController.loginUser);
        this.router.post('/register', authController_1.authController.createUser);
        this.router.post('/validate_token', authController_1.authController.validateToken);
        this.router.get('/', authController_1.authController.list);
        this.router.delete('/:id', authController_1.authController.delete);
    }
}
const authRoutes = new AUTHRoutes();
exports.default = authRoutes.router;
