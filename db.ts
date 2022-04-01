import mysql from 'mysql2';
const database = "wordpress2";
// create the connection to database
export const connectionMysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database,
});