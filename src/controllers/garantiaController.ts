import { Request, Response, text } from 'express';

//Uso de la DB
import pool from '../database'

class GarantiaController{
   public async list (req: Request,res: Response) { 
      //ejecucion de la consulta asincrona 
      const games = await pool.query('SELECT * from garantias');
       //devolucion al cliente en forma de json
       res.json(games)
    }

    public async getOne (req: Request,res: Response){ 
      const { id } = req.params;
      //Se guarda en una constante si tiene un uso el arreglo
      const games = await pool.query('SELECT * from garantias WHERE id = ?',[id]);
      
      if (games.length > 0){
        return res.json(games[0]);
      }
      res.status(404).json({text: 'No existe'});
    }

    public async create (req: Request,res: Response): Promise<void>{
      const {codigoProducto,imagen} = req.body; 
      const verifychanges = await pool.query('SELECT * from productos WHERE codigo = ?',[codigoProducto]); 
      console.log(req.body);   
      if(verifychanges.length){
      await pool.query('INSERT INTO garantias set ?',[req.body])
      res.json({Message: 'Producto Guardado'});
     }else{
      res.status(409).send({ message: 'Revisa que coincidan la imagen y el producto' });
    }
    } 

 
    public async update (req: Request,res: Response){
      const { id } = req.params;
      //Desde req..body va a enviar el conjunto de datos
      await pool.query('UPDATE garantias set ? WHERE id = ?',[req.body, id]); 
      res.json({Message: 'Producto Actualizado'});
    }

    public async delete (req: Request,res: Response){
      const { id } = req.params;
      await pool.query('DELETE FROM garantias WHERE id = ?',[id]);
      res.json({Message: 'Producto Eliminado'});
    }

   
}

//Exportar solo "una"
const garantiaController = new GarantiaController();
export default garantiaController;