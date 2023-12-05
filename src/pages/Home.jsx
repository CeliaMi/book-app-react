import { useLoaderData, Link } from "react-router-dom"

export const Home = () => {
    const books = useLoaderData()
  return (
    <>
    <h1>Home</h1>
    <section>
      {books.data.map(book => {
        return(  
            <article key={book.id}>
              <h4>{book.title}</h4>
              <h6>✍: {book.writer}</h6>
              <p>{book.book_description}</p>
              <button><Link to={`/detail/${book.id}`}></Link></button>
            </article>
        )
      })}
     
    </section>
    
    </>
  )
}
