import {  getOneBook, deleteBook, updateBook } from "../services/BookService"

export const loaderOneBook = async({ params }) => {
    getOneBook(params)
    return { book };
}