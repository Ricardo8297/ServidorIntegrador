import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';

async function isAuth(req: Request, res: Response, next: NextFunction){
   

    if (req.headers.authorization){
        
        const token = req.headers.authorization.split(' ')[1];
        try {
            console.log("2")
            await jwt.verify(token, SECRET_KEY);
            next();
        } catch (error) {
            res.status(401).send({ message: 'ERROR: '+error });
        }
    }else{
        res.status(401).send({ message: 'ERROR ' });
    }
    
    
}

export default isAuth;