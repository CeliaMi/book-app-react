import { updateBook, createBook, deleteBook } from "../services/BookService"



export const handlerUpdateBook = async ( { editedBook } ) =>{
    if(!editedBook){
        return;
    }
    
    const editedBookStructure = {
        "id" : editedBook.bookId,
        "title": editedBook.title,
        "writer": editedBook.writer,
        "book_description": editedBook.description
    }
    console.log(editedBookStructure)

    const res = await updateBook(editedBookStructure)
    return res;
}

export const handlerCreateBook = async ({ newBook }) =>{

    const newBookStructure = {
        "title": newBook.title,
        "writer": newBook.writer,
        "book_description": newBook.description
    }

    const res = await createBook(newBookStructure)
    return res;
}

export const handlerDeleteBook = async (id) => {
    const res = await deleteBook(id)
    return res;
}

