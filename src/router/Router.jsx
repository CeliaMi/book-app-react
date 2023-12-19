import { createBrowserRouter } from "react-router-dom"
import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"
import CreateBook from "../pages/CreateBook";
import { loadOneBook } from "../middleware/bookLoaders";import LayoutPublic from "../layout/layoutPublic";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { getAllBooks } from "../services/BookService";

const router = createBrowserRouter([


    {
      path: '/',
      element: <LayoutPublic />,
      errorElement: <NotFound />,
      children: [
        {
          errorElement: <NotFound />,
          children:[
            {
              index: true,
              loader: getAllBooks ,
              element:<Home/>
            },
            {
              path: "/books",
              element: <Home/>,
              loader: getAllBooks ,
            },
            {
              path: "/books/:id",
              loader: loadOneBook,
              element: <BookDetail/>
            },
            {
              path: "/editBook/:id",
              loader: loadOneBook,
              element: <EditBook/>
            },
            {
              path: "/newBook",
              element: <CreateBook/>
            },

          ]}
      ]}



  ]);


  
export default router