import { createBrowserRouter, useParams } from "react-router-dom"
import { Home } from "../pages/Home";
import { getAllBooks, getOneBook, createBook } from "../services/BookService";
// import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"
import { loaderOneBook } from "../middelware/bookLoaders"
import BookCard from "../components/BookCard";


const router = createBrowserRouter([
  
    {
      path: "/",
      loader: getAllBooks,
      element: <BookCard/>
    },
    {
        path: "/detail/:id",
        loader: loaderOneBook,
        element: <BookDetail/>
    },
    // {
    //     path: "/editBook/:id",
    //     loader: createBook,
    //     element: <EditBook/>
    // },

  ]);
  

  
export default router