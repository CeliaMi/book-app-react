import React from 'react'
import { useLoaderData, Link } from "react-router-dom"
import { deleteBook } from '../services/BookService'
export const BookDetail =() => {

  const { book } = useLoaderData()

  return (
        <article className='bg-gray-800 bg-opacity-40 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto' key={book.id} >
            <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'>TÍTULO</h5>
            <h4 className='title-font text-white text-lg title-font tracking-wider '>{book.title}</h4>
            <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'>ESCRITORA</h5>
            <h6 className='title-font font-medium text-whitleading-relaxed mb-6'>{book.writer}</h6>
            <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'>DESCRIPCIÓN</h5>
            <p className='font-medium text-whitleading-relaxed mb-6'>{book.book_description}</p>
            <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'><Link to={`/editBook/${book.id}`}>Edit</Link></button>
            <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'><Link onClick={() => deleteBook(book.id)}  to={"/"}>delete</Link></button>
            <button className=' inline-flex text-gray-400 bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg m-5'><Link to={"/"}>Back</Link></button>
        </article>
  )
}
