import { Request, Response, text } from 'express';

//Uso de la DB
import pool from '../database'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';

const DuserB ="SELECT * FROM usuarios WHERE nombre=?";
const userI="INSERT INTO usuarios (nombre,contraseña,tipo_usuario) VALUES (?,?,1)";
class AUTHController {


    public async createUser(req: Request, res: Response): Promise<any>{
        

        try {
            
            const { names, passw, passwc } = req.body;
           
            
            const user = await pool.query(DuserB,[names]); 
            
            if (user.length > 0) {
                
                //res.json({ text: 'Usuario reg' });
                res.status(409).send({ message: 'Usuario Registrado' });
            } else {
               
                if (passw != passwc) {
                    
                    //res.json({ text: 'Usuario o contraseña incorrecta' });
                    res.status(409).send({ message: 'Las contraseñas no coinciden' });
                } else {
                   
                    const passwEncry = bcrypt.hashSync(passw, 10);
                    await pool.query(userI,[names,passwEncry]);
                    const newUserConsult= await pool.query(DuserB,[names]);
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = await jwt.sign({ id: newUserConsult[0].id },
                        SECRET_KEY, {
                        expiresIn: expiresIn
                    });
                   
                    const dataUser = {
                        name: newUserConsult[0].nombre,
                        typeUser: newUserConsult[0].tipo_usuario,
                        accessToken: accessToken,
                        expiresIn: expiresIn
                    } 
                    // response 
                    res.send({ dataUser });
                    //res.json(dataUser); 
                }
            }
        }
        catch (err) {
            console.log('Error: ',err);
            //res.json({ text: 'Error 404' });
            res.status(500).send('Server error!');
        }
        
        
    }


    public async loginUser(req: Request, res: Response): Promise<any> {
        try {
            const { names, passw } = req.body;
            const user = await pool.query(DuserB, [
                names
            ]);
            if (user.length > 0) {
                if (!bcrypt.compareSync(passw, user[0].contraseña)) {
                    //res.json({ text: 'Usuario o contraseña incorrecta' });
                    res.status(409).send({ message: 'Usuario o contraseña incorrecta' });
                } else {
                    const expiresIn = 24 * 60 * 60; 
                    /*const expiresIn = 10;*/
                    const accessToken = await jwt.sign({ id: user[0].id },
                        SECRET_KEY, {
                        expiresIn: expiresIn
                    });
                    //console.log(accessToken);
                    const dataUser = {
                        name: user[0].nombre,
                        typeUser: user[0].tipo_usuario,
                        accessToken: accessToken,
                        expiresIn: expiresIn
                    } 
                    // response 
                    res.send({ dataUser });
                    //res.json(dataUser); 
                }
            } else {
                //res.json({ text: 'Usuario o contraseña incorrecta' });
                res.status(409).send({ message: 'Usuario o contraseña incorrecta' });
            }
        }
        catch (err) {
            //console.log('Error: ', err.message);
            //res.json({ text: 'Error 404' });
            res.status(500).send('Server error!');
        }
    }

    public async validateToken(req: Request ,res: Response):Promise<any>{
        const  token  = req.body.dataUser.accessToken;
        try {
            await jwt.verify(token, SECRET_KEY);
            const dataUser = {
                accessToken: token,
            } 
            // response 
            res.send({ dataUser });
        } catch (err) {
            res.status(401).send({ message: 'ERROR: '+err });
        }
    }
}

export const authController = new AUTHController();