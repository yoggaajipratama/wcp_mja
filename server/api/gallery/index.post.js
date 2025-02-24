import { createConnection } from "../utils/db";
import { readMultipartFormData } from "h3";
import { promises as fs } from "fs";
import path from "path";

const uploadDir = path.resolve("public/img/");

export default defineEventHandler(async (event) => {
    const connection = await createConnection();
    const formData = await readMultipartFormData(event);

    const categoryField = formData.find((field) => field.name === "category");
    const category = categoryField?.data ? categoryField.data.toString() : "";

    const actionField = formData.find((field) => field.name === "action");
    const action = actionField?.data ? actionField.data.toString() : "";

    const imageField = formData.find((field) => field.name === "image");

    const idField = formData.find((field) => field.name === "gallery_id");
    const gallery_id = idField?.data ? parseInt(idField.data.toString()) : null;

    const getRandomString = (length = 8) =>
        [...Array(length)].map(() =>
            "0123456789"[Math.floor(Math.random() * 62)]
        ).join("");

    if (action === "add") {
        if (imageField?.filename) {
            try {
                const fileName = `${getRandomString()}${imageField.filename}`;
                await fs.writeFile(path.join(uploadDir, fileName), imageField.data);

                const imagePath = `${fileName}`;
                const saveData = await new Promise((resolve, reject) => {
                    const query = "INSERT INTO gallery(category, image) VALUES(?, ?)";
                    connection.execute(query, [category, imagePath], (err, result) => {
                        if (err) reject({ message: err });
                        else resolve({ message: "ok" });
                    });
                });

                return JSON.stringify(saveData);
            } catch (error) {
                return JSON.stringify({ message: error });
            }
        }
    } else if (action === "edit" && gallery_id) {
        if (imageField?.filename) {
            try {
                const findOldImage = await new Promise((resolve, reject) => {
                    const query = "SELECT image FROM gallery WHERE gallery_id = ?";
                    connection.execute(query, [gallery_id], (err, result) => {
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
                    const query = "UPDATE gallery SET category = ?, image = ? WHERE gallery_id = ?";
                    connection.execute(query, [category, imagePath, gallery_id], (err, result) => {
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
                const query = "UPDATE gallery SET category = ? WHERE gallery_id = ?";
                connection.execute(query, [category, gallery_id], (err, result) => {
                    if (err) reject({ message: err });
                    else resolve({ message: "ok" });
                });
            });

            return JSON.stringify(saveData);
        }
    } else if (action === "delete" && gallery_id) {
        try {
            const findOldImage = await new Promise((resolve, reject) => {
                const query = "SELECT image FROM gallery WHERE gallery_id = ?";
                connection.execute(query, [gallery_id], (err, result) => {
                    if (err) reject({ message: err });
                    else resolve(result[0]?.image || "");
                });
            });
            
            if (findOldImage) {
                const imagePath = path.join(uploadDir, findOldImage);
                
                fs.rm(imagePath).catch(() => {});
            }
            
            const deleted = await new Promise((resolve, reject) => {
                const query = "DELETE FROM gallery WHERE gallery_id = ?";
                connection.execute(query, [gallery_id], (err, result) => {
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
