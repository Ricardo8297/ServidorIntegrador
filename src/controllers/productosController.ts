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
      const { id, nombre, codigo, precio,descripcion, categoria,imegen, existencia,proovedor} = req.body;
      const existNombre = await pool.query('SELECT * from productos WHERE nombre = ?',[nombre]); 
      const existCodigo = await pool.query('SELECT * from productos WHERE codigo = ?',[codigo]); 
      if(existNombre.length > 0){
        res.status(409).send({ message: 'El producto ya esta registrado' });
      }else if(existCodigo.length > 0){
        res.status(409).send({ message: 'El codigo de producto ya esta registrado' });
      }else{
        console.log(req.body);
        await pool.query('INSERT INTO productos set ?',[req.body])
        res.json({Message: 'Producto Guardado'});
      }
      
    }

 
    public async update (req: Request,res: Response){
      const { id } = req.params;
      const { nombre, codigo, precio,descripcion, categoria,imagen, existencia,proovedor} = req.body;
      const existNombre = await pool.query('SELECT * FROM productos WHERE nombre = ? AND id <> ?',[nombre,id]); 
      const existCodigo = await pool.query('SELECT * from productos WHERE codigo = ? AND id <> ?',[codigo,id]); 
      if(existNombre.length > 0){
        res.status(409).send({ message: 'El producto ya esta registrado' });
      }else if(existCodigo.length > 0){
        res.status(409).send({ message: 'El codigo de producto ya esta registrado' });
      }else{
      //Desde req..body va a enviar el conjunto de datos
      //TODO cheque donde el id donde sea diferente del actual
      await pool.query('UPDATE productos set ? WHERE id = ?',[req.body, id]); 
      res.json({Message: 'Producto Actualizado'});
      }
    }

    public async delete (req: Request,res: Response){
      const { id } = req.params;
      await pool.query('DELETE FROM productos WHERE id = ?',[id]);
      res.json({Message: 'Producto Eliminado'});
    }

    public async busqueda (req: Request,res: Response){  
      const {fecha1,fecha2} = req.body;   
      const games = await pool.query('SELECT * FROM productos WHERE fecha BETWEEN ? AND ?',[fecha1,fecha2])
      res.json(games)
    } 
}

//Exportar solo "una"
const productosController = new ProductosController();
export default productosController;