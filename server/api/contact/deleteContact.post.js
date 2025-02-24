import { createConnection } from "../utils/db";
export default defineEventHandler(async (event) => {
    const connection = await createConnection()
    const rawData = await readBody(event)
    const dToken = `mLc#:0_[$c<Ki_;F`
    if (rawData.token == dToken) {
        try {
            if (rawData.id != 0) {
                const response = await new Promise((resolve, reject) => {
                    const query = `DELETE FROM contact WHERE contact_id = ?`;
                    connection.execute(query, [rawData.id], (err, result) => {
                        if (err) return reject(err);
                        resolve({ message: "ok" });
                    });
                });

                return response
            }
        } catch (error) {
            throw error
        }
        finally {
            connection.end()
        }
    }
    else{
        connection.end()
        return null
    }
})