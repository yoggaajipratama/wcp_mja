import mysql from 'mysql2';

const createConnection = async () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wcp_mja"
  });
};

export { createConnection };
//# sourceMappingURL=db.mjs.map
