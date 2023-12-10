import  BookCard  from "../components/BookCard"
import { useLoaderData } from "react-router-dom"


 const Home = () => {
    const books = useLoaderData()
  return (
    <>
    <h1>Home</h1>
    <section>
         <BookCard books = {books} />
    </section>
    </>
  )
}
export default Home