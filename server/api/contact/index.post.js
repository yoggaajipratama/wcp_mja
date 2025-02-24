import crypto from "crypto-js"
import { createConnection } from "../utils/db";

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    const dToken = `mLc#:0_[$c<Ki_;F`
    const sKey = "s@runggoniT1ungsir4h"
    const connection = await createConnection()
    try {
        const dataDecrypt = crypto.AES.decrypt(data, sKey).toString(crypto.enc.Utf8)
        const newData = JSON.parse(dataDecrypt)
        const { name, email, phone, token } = newData
        var aes_name = crypto.AES.encrypt(name, sKey).toString()
        var aes_email = crypto.AES.encrypt(email, sKey).toString()
        var aes_phone = crypto.AES.encrypt(phone, sKey).toString()

        if (token != dToken) return JSON.stringify({ message: "failed" })
        else {
            try {
                const check_data = await new Promise((resolve, reject) => {
                    const query = `SELECT COUNT(*) as total_user FROM contact WHERE email = ? OR phone = ?`;
                    connection.execute(query, [aes_email, aes_phone], (err, result) => {
                        if (err) return reject(err);
                        resolve(result[0]);
                    });
                });                

                if (check_data.total_user > 0) {
                    return { status: 200, message: "failed" }
                }
                else {
                    const stored = await new Promise((resolve, reject) => {
                        connection.query(`INSERT INTO contact(name, email, phone) VALUES(?,?,?)`,
                            [aes_name, aes_email, aes_phone],
                            (err, result) => {
                                if (err) reject(err)
                                resolve({ status: 200, message: "ok" })
                            })
                    })
                    return stored
                }
            } catch (error) {
                return error
            } finally {
                await connection.end()
            }
        }
    } catch (error) {
        connection.end()
        throw error
    }
})