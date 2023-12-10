import React from 'react'
import { Link } from "react-router-dom"
import {handlerDeleteBook } from "../middelware/bookHandlers"


const BookCard = ({ books }) => {
  return (
    <>
    {books.map(book => {
      return(  
        <article key={book.id}>
            <h4>{book.title}</h4>
            <h6>✍: {book.writer}</h6>
            <button><Link to={`/books/${book.id}`}>Detail</Link></button>
            <button><Link to={`/editBook/${book.id}`}>Edit</Link></button>
            <button><Link onClick={() => handlerDeleteBook(book.id)}>delete</Link></button>
        </article>
      )
    })}

    </>
  )
}

export default BookCard