import {  getAllBooks, getOneBook } from "../services/BookService"

export const loadAllBooks = async () => {
    const res = await getAllBooks()
    const books = await res.data
    return books;
}


export const loadOneBook = async ({ params }) => {
    const res = await getOneBook(params.id)
    const book = await res.data
    return { book };
}
