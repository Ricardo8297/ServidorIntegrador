import mysql from 'promise-mysql';

//Credenciales del servidor
import keys from './keys';

const pool = mysql.createPool(keys.database);

//Empezamos a emviarle los metodos usando promises

pool.getConnection()
    //Cuando inicie aceptamos una conexion
    .then(connection =>{
        //Si esta existe entonces
        pool.releaseConnection(connection);
        console.log('DB its run');
    });

export default pool;