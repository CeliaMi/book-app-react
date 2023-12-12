import React from 'react'
import { Link } from "react-router-dom"
import { deleteBook } from '../services/BookService'

const BookCard = ({ books }) => {
  return (
    <>

    {books.length > 0 ? (
      <>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Leer, Leer y Leeeeeeer🐑</p>

          {books.map(book => {
            return(  
              <article className='bg-gray-800 bg-opacity-40 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto' key={book.id}>
                <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'>ME COMPROMETO A LEER</h5>
                <h4 className='text-white font-medium title-font tracking-wider'>{book.title}</h4>
                <h6 className='title-font font-medium text-whitleading-relaxed mb-6 '>de {book.writer}</h6>
                <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'><Link to={`/books/${book.id}`}>Detail</Link></button>
                <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'><Link to={`/editBook/${book.id}`}>Edit</Link></button>
                <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'><Link onClick={() => deleteBook(book.id)}>delete</Link></button>
              </article>
          )})
          }
      </>
      ):(
      <>
      <article className='bg-indigo-400 bg-opacity-30 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto'>¡Ojo! ¡Atención! aviso a navegantes, cada vez que usted escriba un libro en esta lista se estará comprometiendo firmemente a leerlo...</article>
      <article className='bg-gray-800 bg-opacity-40 p-8 rounded p-2 lg:w-1/2 md:w-2/3 mx-auto'>
      <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'> ¡Animate y añade tu primer Libro!</h5>
      <button className=' inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg'><Link className=" hover:text-white" to="/newBook">🔮Añadir mi primer libro🔮</Link></button> 
      </article>
      </>
      )}

    </>
  )
}

export default BookCard