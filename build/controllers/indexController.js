"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';
const jwt = require('jsonwebtoken');
class IndexController {
    index(req, res) {
        // res.send('Hello');
        res.json({ text: 'API IS /api/games' });
    }
}
exports.indexController = new IndexController();
