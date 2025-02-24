import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { createConnection } from '../utils/db.mjs';
import CryptoJS from 'crypto-js';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';
import 'mysql2';

const login_post = defineEventHandler(async (event) => {
  const connection = await createConnection();
  try {
    const data = await readBody(event);
    const sKey = "s@runggoniT1ungsir4h";
    const data_decrypt = CryptoJS.AES.decrypt(data.data, sKey).toString(CryptoJS.enc.Utf8);
    var dataField = JSON.parse(data_decrypt);
    var usernameField = dataField.username;
    var passwordField = dataField.password;
    const checkUser = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user WHERE username = ?`,
        [usernameField],
        (err, result) => {
          if (err) reject(err);
          else {
            resolve(...result);
          }
        }
      );
    });
    if (CryptoJS.AES.decrypt(checkUser.password, sKey).toString(CryptoJS.enc.Utf8) == passwordField) {
      const authToken = CryptoJS.AES.encrypt(usernameField, sKey).toString();
      return JSON.stringify({
        auth: authToken,
        message: "ok"
      });
    } else {
      console.log(CryptoJS.AES.decrypt(checkUser.password, sKey).toString(CryptoJS.enc.Utf8));
      return JSON.stringify({ message: "You're password or username is wrong!" });
    }
  } catch (error) {
    throw error;
  } finally {
    connection.end();
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
