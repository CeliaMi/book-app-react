import  BookCard  from "../components/BookCard"
import { useLoaderData } from "react-router-dom"


 const Home = () => {
    const books = useLoaderData()
  return (
    <>
    <h1>Libros bonitos para Leer y viajar🐱‍🚀</h1>
    <section>
         <BookCard books = {books} />
    </section>
    </>
  )
}
export default Home