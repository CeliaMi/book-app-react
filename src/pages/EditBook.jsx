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
    <>
      <h3>¿Qué quieres actualizar?</h3>
      <form onSubmit={handleSubmit} >

        <label htmlFor="title">Títlo:</label>
        <input type="text" name="title" id="title" onChange={handleTitleChange}  value={ title ? title : book.title } />
        <label htmlFor="writer">Autora:</label>
        <input type="text" name="writer" id="writer" onChange={handleWriterChange} value={ writer ? writer : book.writer } placeholder={book.writer}/>
        <label htmlFor="book_description">Descripcion:</label>
        <input type="text" name="book_description" id="book_description"  onChange={handleDescriptionChange} value={ description ? description : book.book_description } placeholder={book.book_description}/>
        <button type="submit"> Atualizar✨</button>
        <button><Link to={"/"}>Back</Link></button>

      </form>
    </>
  )
}
