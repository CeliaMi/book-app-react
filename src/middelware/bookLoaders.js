import {  getOneBook } from "../services/BookService"

export const loaderOneBook = async({ params }) => {
    const res = await getOneBook(params.id)
    const book = await res.data
    return book;
}