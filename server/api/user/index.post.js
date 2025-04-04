import { createConnection } from "../utils/db"
import CryptoJS from "crypto-js"
export default defineEventHandler(async (event) => {
    const connection = await createConnection()
    try {
        const rawData = await readBody(event)

        const config = useRuntimeConfig()
        const decryptData = CryptoJS.AES.decrypt(rawData, config.secretKey).toString(CryptoJS.enc.Utf8)
        var data = JSON.parse(decryptData)

        if (data.token == `mLc#:0_[$c<Ki_;F`) {
            const checkUser = await new Promise((resolve, reject) => {
                connection.query(
                    `SELECT * FROM user WHERE username = ?`,
                    [data.username],
                    (err, result) => {
                        if (err) reject(err)
                        else {
                            resolve(...result)
                        }
                    }
                )
            })
            const decryptPassword = CryptoJS.AES.decrypt(checkUser.password, config.secretKey).toString(CryptoJS.enc.Utf8)
            if (decryptPassword == data.oldPassword) {
                const encryptNewPassword = CryptoJS.AES.encrypt(data.password, config.secretKey).toString()

                const updateData = await new Promise((resolve, reject) => {
                    connection.query(
                        `UPDATE user SET username = ?, password = ? WHERE user_id = ?`,
                        [data.username, encryptNewPassword, checkUser.user_id],
                        (err, result) => {
                            if (err) reject({ message: err })
                            else {
                                resolve({ message: "ok" })
                            }
                        }
                    )
                })
                return JSON.stringify(updateData)
            } else {
                return JSON.stringify({ message: 'Wrong old password!' })
            }
        }
        else {
            return JSON.stringify({ message: 'Invalid' })
        }
    } catch (error) {
        throw error
    }
    finally {
        connection.end()
    }
})