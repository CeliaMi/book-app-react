import { updateBook } from "../services/BookService"



export const handlerUpdateBook = async ( { editedBook } ) =>{
    if(!editedBook){
        return;
    }
    console.log(editedBook)
    
    const editedBookStructure = {
        "id" : editedBook.bookId,
        "title": editedBook.title,
        "writer": editedBook.writer,
        "book_description": editedBook.description
    }
    console.log(editedBookStructure)

    const res = await updateBook( editedBookStructure )
    return res;
}

