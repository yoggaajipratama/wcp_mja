import mysql from 'mysql2';

const createConnection = async () => {
  return mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "japan999",
    database: "wcp_mja"
  });
};

export { createConnection };
//# sourceMappingURL=db.mjs.map
