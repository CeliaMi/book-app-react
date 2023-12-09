import { createBrowserRouter } from "react-router-dom"
import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"
import CreateBook from "../pages/CreateBook";
import { loadAllBooks, loadOneBook } from "../middelware/bookLoaders";
import BookCard from "../components/BookCard";
import LayoutPublic from "../layout/layoutPublic";
import NotFound from "../pages/NotFound";

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
              {
                path: "/newBook",
                element: <CreateBook/>
              },
          ]}
      ]}



  ]);
  

  
export default router