import {  getOneBook, updateBook } from "../services/BookService"

export const loaderOneBook = async ({ params }) => {
    const res = await getOneBook(params.id)
    const book = await res.data
    return book;
}


export const loaderUpdateBook = async ({ params, editedBook }) =>{
    if(!editedBook){
        return;
    }
    
    const editedBookStructure = {
        "id" : params.id,
        "title": editedBook.title,
        "title": editedBook.writer,
        "book_description": editedBook.book_description
    }


    const res = await updateBook( editedBookStructure )
    return res;
}

