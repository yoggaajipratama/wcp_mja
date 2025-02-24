import { createConnection } from "../utils/db";
export default defineEventHandler(async (event) => {
    const connection = await createConnection()
    try {
        const response = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM portfolio`, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
        return response
    } catch (error) {
        return JSON.stringify({ message: error })
    }
    finally {
        connection.end()
    }
})