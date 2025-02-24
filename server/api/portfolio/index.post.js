import { createConnection } from "../utils/db";
import { readMultipartFormData } from "h3";
import { promises as fs } from "fs";
import path from "path";

const uploadDir = path.resolve("public/img/");

export default defineEventHandler(async (event) => {
    const connection = await createConnection();
    const formData = await readMultipartFormData(event);

    const nameField = formData.find((field) => field.name === "name");
    const name = nameField?.data ? nameField.data.toString() : "";

    const actionField = formData.find((field) => field.name === "action");
    const action = actionField?.data ? actionField.data.toString() : "";

    const imageField = formData.find((field) => field.name === "image");

    const idField = formData.find((field) => field.name === "portfolio_id");
    const portfolio_id = idField?.data ? parseInt(idField.data.toString()) : null;

    const getRandomString = (length = 8) =>
        [...Array(length)].map(() =>
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 62)]
        ).join("");

    if (action === "add") {
        if (imageField?.filename) {
            try {
                const fileName = `${getRandomString()}${imageField.filename}`;
                await fs.writeFile(path.join(uploadDir, fileName), imageField.data);

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
        if (imageField?.filename) {
            try {
                const findOldImage = await new Promise((resolve, reject) => {
                    const query = "SELECT image FROM portfolio WHERE portfolio_id = ?";
                    connection.execute(query, [portfolio_id], (err, result) => {
                        if (err) reject({ message: err });
                        else resolve(result[0]?.image || "");
                    });
                });

                if (findOldImage) {
                    await fs.rm(path.join(uploadDir, findOldImage));
                }

                const fileName = `${getRandomString()}${imageField.filename}`;
                await fs.writeFile(path.join(uploadDir, fileName), imageField.data);

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
                    if (err) reject({ message: err });
                    else resolve(result[0]?.image || "");
                });
            });

            if (findOldImage) {
                const imagePath = path.join(uploadDir, findOldImage);

                fs.rm(imagePath).catch(() => { });
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
