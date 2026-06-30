import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"; //ideally it should be present in .env file.

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};
