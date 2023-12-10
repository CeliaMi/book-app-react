import  BookCard  from "../components/BookCard"
import { useLoaderData } from "react-router-dom"


 const Home = () => {
    const books = useLoaderData()
  return (
    <section className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white" >Libros bonitos para Leer y viajar🐱‍🚀</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Leer Leer y Leer</p>
          <BookCard books = {books} />
    </section>
  )
}
export default Home