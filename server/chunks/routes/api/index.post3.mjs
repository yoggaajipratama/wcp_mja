import { d as defineEventHandler, a as readMultipartFormData } from '../../nitro/nitro.mjs';
import { createConnection } from './utils/db.mjs';
import { promises } from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';
import 'mysql2';

const uploadDir = path.resolve("public/img/");
const index_post = defineEventHandler(async (event) => {
  const connection = await createConnection();
  const formData = await readMultipartFormData(event);
  const nameField = formData.find((field) => field.name === "name");
  const name = (nameField == null ? void 0 : nameField.data) ? nameField.data.toString() : "";
  const actionField = formData.find((field) => field.name === "action");
  const action = (actionField == null ? void 0 : actionField.data) ? actionField.data.toString() : "";
  const imageField = formData.find((field) => field.name === "image");
  const idField = formData.find((field) => field.name === "portfolio_id");
  const portfolio_id = (idField == null ? void 0 : idField.data) ? parseInt(idField.data.toString()) : null;
  const getRandomString = (length = 8) => [...Array(length)].map(
    () => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 62)]
  ).join("");
  if (action === "add") {
    if (imageField == null ? void 0 : imageField.filename) {
      try {
        const fileName = `${getRandomString()}${imageField.filename}`;
        await promises.writeFile(path.join(uploadDir, fileName), imageField.data);
        const imagePath = `${fileName}`;
        const saveData = await new Promise((resolve, reject) => {
          const query = "INSERT INTO portfolio(name, image) VALUES(?, ?)";
          connection.execute(query, [name, imagePath], (err, result) => {
            if (err) reject({ message: err });
            else resolve({ message: "ok" });
          });
        });
        return JSON.stringify(saveData);
      } catch (error) {
        return JSON.stringify({ message: error });
      }
    }
  } else if (action === "edit" && portfolio_id) {
    if (imageField == null ? void 0 : imageField.filename) {
      try {
        const findOldImage = await new Promise((resolve, reject) => {
          const query = "SELECT image FROM portfolio WHERE portfolio_id = ?";
          connection.execute(query, [portfolio_id], (err, result) => {
            var _a;
            if (err) reject({ message: err });
            else resolve(((_a = result[0]) == null ? void 0 : _a.image) || "");
          });
        });
        if (findOldImage) {
          await promises.rm(path.join(uploadDir, findOldImage));
        }
        const fileName = `${getRandomString()}${imageField.filename}`;
        await promises.writeFile(path.join(uploadDir, fileName), imageField.data);
        const imagePath = `${fileName}`;
        const saveData = await new Promise((resolve, reject) => {
          const query = "UPDATE portfolio SET name = ?, image = ? WHERE portfolio_id = ?";
          connection.execute(query, [name, imagePath, portfolio_id], (err, result) => {
            if (err) reject({ message: err });
            else resolve({ message: "ok" });
          });
        });
        return JSON.stringify(saveData);
      } catch (error) {
        return JSON.stringify({ message: error });
      }
    } else {
      const saveData = await new Promise((resolve, reject) => {
        const query = "UPDATE portfolio SET name = ? WHERE portfolio_id = ?";
        connection.execute(query, [name, portfolio_id], (err, result) => {
          if (err) reject({ message: err });
          else resolve({ message: "ok" });
        });
      });
      return JSON.stringify(saveData);
    }
  } else if (action === "delete" && portfolio_id) {
    try {
      const findOldImage = await new Promise((resolve, reject) => {
        const query = "SELECT image FROM portfolio WHERE portfolio_id = ?";
        connection.execute(query, [portfolio_id], (err, result) => {
          var _a;
          if (err) reject({ message: err });
          else resolve(((_a = result[0]) == null ? void 0 : _a.image) || "");
        });
      });
      if (findOldImage) {
        const imagePath = path.join(uploadDir, findOldImage);
        promises.rm(imagePath).catch(() => {
        });
      }
      const deleted = await new Promise((resolve, reject) => {
        const query = "DELETE FROM portfolio WHERE portfolio_id = ?";
        connection.execute(query, [portfolio_id], (err, result) => {
          if (err) reject({ message: err });
          else resolve({ message: "ok" });
        });
      });
      return JSON.stringify(deleted);
    } catch (error) {
      return JSON.stringify({ message: error });
    }
  }
  connection.end();
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
