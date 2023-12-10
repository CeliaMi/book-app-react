import { useState } from 'react'
import { useLoaderData, Link , useNavigate} from 'react-router-dom'
import { handlerUpdateBook } from '../middelware/bookHandlers'

export const EditBook = () => {

 const { book } = useLoaderData();

 const [title, setTitle] = useState(book.title)
 const [writer, setWriter] = useState(book.writer)
 const [description, setDescription] = useState(book.book_description)

 const navigate = useNavigate()

const handleTitleChange = (event) => {
  const titleInput = event.target.value;
  setTitle(titleInput)
 }

 const handleWriterChange = (event) => {
  const writerInput = event.target.value;
  setWriter(writerInput)
 }
 
 const handleDescriptionChange = (event) => {
  const descriptionInput = event.target.value;
  setDescription(descriptionInput)
 }

 const bookId = book.id
 const handleSubmit = (event) => {
  event.preventDefault();
  const  editedBook  = { title, writer, description, bookId }
  console.log(editedBook)
  handlerUpdateBook( { editedBook })
  navigate('/')
 }
 


  return (
    <section className='lg:w-1/2 md:w-2/3 mx-auto'>
      <h3>¿Qué quieres actualizar?</h3>
      <form onSubmit={handleSubmit} className='flex flex-wrap -m-2' >
        <div className='p-2 w-full'>
        <div className='relative'>
              <label htmlFor="title" className='eading-7 text-sm text-gray-400'>Títlo:</label>
              <input type="text" name="title" id="title" onChange={handleTitleChange}  value={ title ? title : book.title } className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5'/>

              <label htmlFor="writer" className='eading-7 text-sm text-gray-400'>Autora:</label>
              <input type="text" name="writer" id="writer" onChange={handleWriterChange} value={ writer ? writer : book.writer } placeholder={book.writer} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5'/>


              <label htmlFor="book_description" className='eading-7 text-sm text-gray-400 '>Descripcion:</label>
              <input type="text" name="book_description" id="book_description"  onChange={handleDescriptionChange} value={ description ? description : book.book_description } placeholder={book.book_description} className='
              w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-ellipsis overflow-hidden' />

              <button type="submit" className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5'> Atualizar✨</button>
              <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mt-5'><Link to={"/"}>Back</Link></button>
        </div>
        </div>

      </form>
      </section>
  )
}
