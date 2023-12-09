import React from 'react'
import { useLoaderData, Link } from "react-router-dom"

export const BookDetail =() => {

  const book  = useLoaderData()
  return (
        <article key={book.id}>
            <h4>{book.title}</h4>
            <h6>✍: {book.writer}</h6>
            <p>{book.book_description}</p>
            <button><Link to={"/"}>Back</Link></button>
        </article>
  )
}
