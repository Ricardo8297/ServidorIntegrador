import { Request, Response, text } from 'express';

//Uso de la DB
import pool from '../database'

class ProductosController{
   public async list (req: Request,res: Response) { 
      //ejecucion de la consulta asincrona 
      const games = await pool.query('SELECT * from productos');
       //devolucion al cliente en forma de json
       res.json(games)
    }

    public async getOne (req: Request,res: Response){ 
      const { id } = req.params;
      //Se guarda en una constante si tiene un uso el arreglo
      const games = await pool.query('SELECT * from productos WHERE id = ?',[id]);
      
      if (games.length > 0){
        return res.json(games[0]);
      }
      res.status(404).json({text: 'No existe'});
    }

    public async create (req: Request,res: Response): Promise<void>{
      console.log(req.body);
      await pool.query('INSERT INTO productos set ?',[req.body])
      res.json({Message: 'Producto Guardado'});
    } 

 
    public async update (req: Request,res: Response){
      const { id } = req.params;
      //Desde req..body va a enviar el conjunto de datos
      await pool.query('UPDATE productos set ? WHERE id = ?',[req.body, id]); 
      res.json({Message: 'Producto Actualizado'});
    }

    public async delete (req: Request,res: Response){
      const { id } = req.params;
      await pool.query('DELETE FROM productos WHERE id = ?',[id]);
      res.json({Message: 'Producto Eliminado'});
    }

   
}

//Exportar solo "una"
const productosController = new ProductosController();
export default productosController;