import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home";
import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"
import { getAllBooks, getOneBook, deleteBook, updateBook } from "../services/BookService"



const router = createBrowserRouter([
    {
      path: "/",
      loader: getAllBooks,
      element: <Home/>
    },
    // {
    //     path: "/detail/:id",
    //     loader: loader,
    //     element: <BookDetail/>
    // },
    // {
    //     path: "/editBook/:id",
    //     loader: loader,
    //     element: <EditBook/>
    // },

  ]);
  

export default router