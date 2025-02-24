import { createConnection } from "../utils/db";
export default defineEventHandler(async (event) => {
    const connection = await createConnection()
    const rawData = await readBody(event)
    const dToken = `mLc#:0_[$c<Ki_;F`
    if (rawData.token == dToken) {
        try {
            const allData = await new Promise((resolve, reject) => {
                connection.query(`SELECT * FROM contact`, (err, result) => {
                    if (err) reject(err)
                    resolve(result)
                })
            })
            return allData
        } catch (error) {
            throw error
        }
        finally {
            connection.end()
        }
    }
    else {
        connection.end()
        return null
    }

})