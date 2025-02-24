import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { createConnection } from './utils/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';
import 'mysql2';

const index_get = defineEventHandler(async (event) => {
  const connection = await createConnection();
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM portfolio`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    return response;
  } catch (error) {
    return JSON.stringify({ message: error });
  } finally {
    connection.end();
  }
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
