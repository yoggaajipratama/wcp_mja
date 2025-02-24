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
    const total_contact = await new Promise((resolve, reject) => {
      connection.query(`SELECT COUNT(*) AS total_contact FROM contact`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    const total_gallery_image = await new Promise((resolve, reject) => {
      connection.query(`SELECT COUNT(*) AS total_gallery_image FROM gallery`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    const total_portfolio_image = await new Promise((resolve, reject) => {
      connection.query(`SELECT COUNT(*) AS total_portfolio_image FROM portfolio`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    return JSON.stringify(Object.assign({}, ...[...total_contact, ...total_gallery_image, ...total_portfolio_image]));
  } catch (error) {
    throw error;
  } finally {
    connection.end();
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
