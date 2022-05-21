import { Request, Response, text } from 'express';

//Uso de la DB
import pool from '../database'

class GamesController{
   public async list (req: Request,res: Response) { 
      //ejecucion de la consulta asincrona 
      const games = await pool.query('SELECT * from games');
       //devolucion al cliente en forma de json
       res.json(games)
    }

    public async getOne (req: Request,res: Response){ 
      const { id } = req.params;
      //Se guarda en una constante si tiene un uso el arreglo
      const games = await pool.query('SELECT * from games WHERE id = ?',[id]);
      
      if (games.length > 0){
        return res.json(games[0]);
      }
      res.status(404).json({text: 'No existe'});
    }

    public async create (req: Request,res: Response): Promise<void>{
      console.log(req.body);
      await pool.query('INSERT INTO games set ?',[req.body])
      res.json({Message: 'Juego Guardado'});
    } 

 
    public async update (req: Request,res: Response){
      const { id } = req.params;
      //Desde req..body va a enviar el conjunto de datos
      await pool.query('UPDATE games set ? WHERE id = ?',[req.body, id]);
      res.json({Message: 'Juego Actualizado'});
    }

    public async delete (req: Request,res: Response){
      const { id } = req.params;
      await pool.query('DELETE FROM games WHERE id = ?',[id]);
      res.json({Message: 'Juego Eliminado'});
    }

   
}

//Exportar solo "una"
const gamesController = new GamesController();
export default gamesController;