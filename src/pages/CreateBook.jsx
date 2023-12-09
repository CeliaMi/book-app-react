import { useNavigate, Link  } from "react-router-dom";
import { useState } from "react";
import { handlerCreateBook } from "../middelware/bookHandlers"
const CreateBook = () => {

  const [title, setTitle] = useState()
  const [writer, setWriter] = useState()
  const [description, setDescription] = useState()
 
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

  const handleSubmit = (event) => {
   event.preventDefault();
   const  newBook  = { title, writer, description }
   handlerCreateBook( { newBook })
   navigate('/')
  }


    return (
        <>
          <h3>¿Qué nuevo libro quieres añadir?</h3>
          <form onSubmit={handleSubmit} >
    
            <label htmlFor="title">Títlo:</label>
            <input type="text" name="title" id="title" onChange={handleTitleChange}/>
            <label htmlFor="writer">Autora:</label>
            <input type="text" name="writer" id="writer" onChange={handleWriterChange}/>
            <label htmlFor="book_description">Descripcion:</label>
            <input type="text" name="book_description" id="book_description"  onChange={handleDescriptionChange}  />
            <button type="submit"> Añadir nuevo Libro✨</button>
            <button><Link to={"/"}>Back</Link></button>
    
          </form>
        </>
      )
}

export default CreateBook