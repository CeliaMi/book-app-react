import { createBrowserRouter, useParams } from "react-router-dom"
import { Home } from "../pages/Home";
import { getAllBooks, getOneBook, createBook } from "../services/BookService";
import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"

// let { bookId } = useParams();

const router = createBrowserRouter([
  
    {
      path: "/",
      loader: getAllBooks,
      element: <Home/>
    },
    {
        path: "/detail/:id",
        loader: getOneBook(params.id),
        element: <BookDetail/>
    },
    {
        path: "/editBook/:id",
        loader: createBook,
        element: <EditBook/>
    },

  ]);
  

  
export default router