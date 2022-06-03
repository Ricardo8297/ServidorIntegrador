import { Request, Response, text } from 'express';

//Uso de la DB
import pool from '../database'

class VentasController{
   public async list (req: Request,res: Response) { 
      //ejecucion de la consulta asincrona 
      const games = await pool.query('SELECT * from ventas');
       //devolucion al cliente en forma de json
       res.json(games)
    }

    public async getOne (req: Request,res: Response){ 
      const { id } = req.params;
      //Se guarda en una constante si tiene un uso el arreglo
      const games = await pool.query('SELECT * from ventas WHERE id = ?',[id]);
      
      if (games.length > 0){
        return res.json(games[0]);
      }
      res.status(404).json({text: 'No existe'});
    }

    public async create (req: Request,res: Response): Promise<void>{
      console.log(req.body);
      await pool.query('INSERT INTO ventas set ?',[req.body])
      res.json({Message: 'venta Guardada'});
    } 

 
    public async update (req: Request,res: Response){
      const { id } = req.params;
      //Desde req..body va a enviar el conjunto de datos
      await pool.query('UPDATE ventas set ? WHERE id = ?',[req.body, id]);
      res.json({Message: 'venta Actualizada'});
    }

    public async delete (req: Request,res: Response){
      const { id } = req.params;
      await pool.query('DELETE FROM ventas WHERE id = ?',[id]);
      res.json({Message: 'venta Eliminada'});
    }

    public async busqueda (req: Request,res: Response){  
      const {fecha1,fecha2} = req.body;   
      const games = await pool.query('SELECT * FROM ventas WHERE fecha BETWEEN ? AND ?',[fecha1,fecha2])
      res.json(games)
    } 

   
}

//Exportar solo "una"
const ventasController = new VentasController();
export default ventasController;