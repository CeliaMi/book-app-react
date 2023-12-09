import React from 'react'
import { useLoaderData, Link } from "react-router-dom"


const BookCard = () => {
  const books = useLoaderData()
  return (
    <>
    {books.map(book => {
      return(  
        <article key={book.id}>
            <h4>{book.title}</h4>
            <h6>✍: {book.writer}</h6>
            <button><Link to={`/detail/${book.id}`}>Detail</Link></button>
            <button><Link to={`/editBook/${book.id}`}>Edit</Link></button>
        </article>
      )
    })}

    </>
  )
}

export default BookCard