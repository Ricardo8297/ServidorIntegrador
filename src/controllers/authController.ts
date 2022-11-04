import { Request, Response, text } from 'express';

//Uso de la DB
import pool from '../database'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const SECRET_KEY = 'N2M4NTNmYjJlYTEwMDc2YTU3NDhlZjdm';

const DuserB ="SELECT * FROM usuarios WHERE nombre=?";
const userI="INSERT INTO usuarios (nombre,contraseña,tipo_usuario,apellidop,apellidom,direccion,telefono,email) VALUES (?,?,3,?,?,?,?,?)";
class AUTHController {

    public async list (req: Request,res: Response) { 
        //ejecucion de la consulta asincrona 
        const games = await pool.query('SELECT * from usuarios');
         //devolucion al cliente en forma de json
         res.json(games)
      }

      public async delete (req: Request,res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = ?',[id]);
        res.json({Message: 'Usuario Eliminado'});
      }

    public async createUser(req: Request, res: Response): Promise<any>{
        

        try {
            
            const { names, passw, passwc, apellidop, apellidom, direccion, telefono ,email   } = req.body;
           
            
            const user = await pool.query(DuserB,[names]); 
            
            if (user.length > 0) {
                
                //res.json({ text: 'Usuario reg' });
                res.status(409).send({ message: 'Usuario ya registrado' });
            } else {
               
                if (passw != passwc) {
                    
                    //res.json({ text: 'Usuario o contraseña incorrecta' });
                    res.status(409).send({ message: 'Las contraseñas no coinciden' });
                } else {
                   
                    const passwEncry = bcrypt.hashSync(passw, 10);
                    await pool.query(userI,[names,passwEncry,apellidop,apellidom,direccion,telefono,email]);
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
                if(user[0].tipo_usuario == 4){
                    res.status(409).send({ message: 'ACCESO DENEGADO' });
                }else if (!bcrypt.compareSync(passw, user[0].contraseña)) {
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

    public async banear(req: Request ,res: Response):Promise<any>{
        const { id } = req.params;

        
      const user = await pool.query('Select * from usuarios WHERE id = ?',[id]);
      if(user[0].tipo_usuario == 4){
      //Se guarda en una constante si tiene un uso el arreglo
      const games = await pool.query('Update usuarios set tipo_usuario = 3 WHERE id = ?',[id]);
      }else{
      const games = await pool.query('Update usuarios set tipo_usuario = 4 WHERE id = ?',[id]);
      }
      res.json({Message: 'Cambios realizados'});
    }
}

export const authController = new AUTHController();