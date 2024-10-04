//db.ts
'use server'
import mysql from "mysql2/promise";


export async function callUsers(query: string, data: any) {

    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            database: 'database_test',
            user: 'root',
            password: 'Admin123#'
        })
        const [result] = await db.execute(query, data);
        await db.end();
        return { success: true, result };
    } catch (error) {
        if (error?.code == "ER_DUP_ENTRY") {
            return { success: false, message: "Email already exists" };
        }
        return { success: false, error };
    }

}