import { Request, Response, text } from 'express';

import pool from '../database'


class ReabastecimientoController{
    public async list (req: Request,res: Response) { 
       //ejecucion de la consulta asincrona 
       const games = await pool.query('SELECT * from reabastecimiento');
        //devolucion al cliente en forma de json
        res.json(games)
    }
 
     public async getOne (req: Request,res: Response){ 
       const { id } = req.params;
       //Se guarda en una constante si tiene un uso el arreglo
       const games = await pool.query('SELECT * from reabastecimiento WHERE id = ?',[id]);
       
       if (games.length > 0){
         return res.json(games[0]);
       }
       res.status(404).json({text: 'No existe'});
     }
 
     public async create (req: Request,res: Response): Promise<void>{
       console.log(req.body);
       await pool.query('INSERT INTO reabastecimiento set ?',[req.body])
       res.json({Message: 'Reporte Guardado'});
     } 
 
  
     public async update (req: Request,res: Response){
       const { id } = req.params;
       //Desde req..body va a enviar el conjunto de datos
       await pool.query('UPDATE reabastecimiento set ? WHERE id = ?',[req.body, id]); 
       res.json({Message: 'Reporte Actualizado'});
     }
 
     public async delete (req: Request,res: Response){
       const { id } = req.params;
       await pool.query('DELETE FROM reabastecimiento WHERE id = ?',[id]);
       res.json({Message: 'Reporte Eliminado'});
     }
 
     public async busqueda (req: Request,res: Response){  
      const {fecha1,fecha2} = req.body;   
      const games = await pool.query('SELECT * FROM reabastecimiento WHERE fecha BETWEEN ? AND ?',[fecha1,fecha2])
      res.json(games)
    } 
 }
 
 //Exportar solo "una"
 const reabastecimientoController = new ReabastecimientoController();
 export default reabastecimientoController;