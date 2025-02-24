import mysql from "mysql2";

export const createConnection = async () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mJ@jaya48ad1',
        database: 'wcp_mja'
    })
}