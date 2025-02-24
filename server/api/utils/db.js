import mysql from "mysql2";

export const createConnection = async () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'wcp_mja'
    })
}