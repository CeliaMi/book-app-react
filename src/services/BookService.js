import axios from "axios";

    export const API_URL = "http://localhost:3000/books";
    
    export const getAllBooks = async () => {
        const res = await axios.get(API_URL);
        return res;
    };

    export const getOneBook = async (id) => {
        const res = await axios.get(`${API_URL}/${id}`);
        return res;
    };

    export const createBook = async (data) => {
        const res = await axios.post(API_URL, data);
        return res;
    };

    export const deleteBook = async (id) => {
        let URL_ID = `${API_URL}/${id}`;
        const res = await axios.delete(URL_ID);
        return res;
    }

    export const updateBook = async (data) => {
        let URL_ID = `${API_URL}/${data.id}`;
        const res = await axios.put(URL_ID, data);
        return res;
    };
 