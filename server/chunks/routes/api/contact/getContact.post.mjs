import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { createConnection } from '../utils/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';
import 'mysql2';

const getContact_post = defineEventHandler(async (event) => {
  const connection = await createConnection();
  const rawData = await readBody(event);
  const dToken = `mLc#:0_[$c<Ki_;F`;
  if (rawData.token == dToken) {
    try {
      const allData = await new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM contact`, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
      return allData;
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  } else {
    connection.end();
    return null;
  }
});

export { getContact_post as default };
//# sourceMappingURL=getContact.post.mjs.map
