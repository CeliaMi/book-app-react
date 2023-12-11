import  BookCard  from "../components/BookCard"
import { useLoaderData } from "react-router-dom"


 const Home = () => {
    const books = useLoaderData()
  return (
    <section className="flex flex-col text-center w-full container px-5 py-2 mx-auto justify-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-white" >Mi listado de Libros</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Leer, Leer y Leeeeeeer🐑</p>
      <div className="flex flex-col mb-20">
          <BookCard books = {books} />
      </div>   
    </section>
  )
}
export default Home