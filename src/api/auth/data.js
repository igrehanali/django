//api/data.ts
import { callUsers } from "../../lib/db";
const {
    pbkdf2Sync,
} = require('crypto');
export async function fetchUsers() {

    try {
        const response = await callUsers("SELECT * FROM users", []);
        const data = JSON.stringify(response);
        return data;
    }

    catch (error) {
        console.log(error);
        throw new Error("Failed to fetch revenue data.");
    }

}

export async function addUser(email, password) {
    try {
        const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
        const key = pbkdf2Sync(password, 'salt', 100000, 64, 'sha512');
        const hashedPass = key.toString('hex')
        const data = [email, hashedPass];
        const response = await callUsers(query, data);
        return response;
    } catch (error) {
        return error;
    }
}

// Function to login a user
export async function loginUser(email, password) {
    try {
        // Fetch the user record by email
        const query = "SELECT * FROM users WHERE email = ?";
        const response = await callUsers(query, [email]);
        if (response.success == true) {
            const users = response.result

            if (users?.length == 0) {
                return { success: false, message: "Email not found." };
            }
            const key = pbkdf2Sync(password, 'salt', 100000, 64, 'sha512');
            const hashedPass = key.toString('hex')
            const user = users[0];
            if (user?.password == hashedPass) {
                delete user.password;
                return { success: true, user };
            } else {
                return { success: false, message: "Invalid password." };
            }

        }
    } catch (error) {
        console.error("Error logging in user:", error);
        return { success: false, message: "Failed to log in user." };
    }
}