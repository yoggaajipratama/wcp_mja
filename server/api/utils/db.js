import mysql from "mysql2";

export const createConnection = async () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'mJ@jaya48ad1',
        database: 'wcp_mja'
    })
}