import { Request, Response } from 'express';

const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';
const jwt = require('jsonwebtoken');
class IndexController{
   public index (req: Request,res: Response) { 
      // res.send('Hello');
      res.json({text: 'API IS /api/games'})
    }
}

 export const indexController = new IndexController();