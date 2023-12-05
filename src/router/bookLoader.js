import { getAllBooks } from "../services/BookService"


export const bookLoader = async () => {
   const AllBooks = await getAllBooks();
   return AllBooks.data;
}


