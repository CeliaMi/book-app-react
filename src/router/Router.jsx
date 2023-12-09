import { createBrowserRouter, useParams } from "react-router-dom"
import { getAllBooks, getOneBook, createBook } from "../services/BookService";
import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"
import { handlerUpdateBook } from "../middelware/bookHandlers"
import { loadAllBooks, loadOneBook } from "../middelware/bookLoaders";
import BookCard from "../components/BookCard";


const router = createBrowserRouter([
  
    {
      path: "/",
      loader: loadAllBooks,
      element: <BookCard/>
    },
    {
        path: "/detail/:id",
        loader: loadOneBook,
        element: <BookDetail/>
    },
    {
        path: "/editBook/:id",
        loader: loadOneBook,
        element: <EditBook/>
    },

  ]);
  

  
export default router