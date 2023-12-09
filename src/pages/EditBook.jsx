// import { useState } from 'react'
// import { useLoaderData } from 'react-router-dom'
// import { loaderUpdateBook } from '../middelware/bookHandler'

export const EditBook = () => {

//  const { book } = useLoaderData();
//  console.log(book)
//  const [title, setTitle] = useState(book.title)
//  const [writer, setWriter] = useState(book.writer)
//  const [ description, setDescription] = useState(book.book_description)

// const handleTitleChange = (event) => {
//   const titleInput = event.target.value;
//   setTitle(titleInput)
//  }

//  const handleWriterChange = (event) => {
//   const writerInput = event.target.value;
//   setWriter(writerInput)
//  }
 
//  const handleDescriptionChange = (event) => {
//   const descriptionInput = event.target.value;
//   setDescription(descriptionInput)
//  }

//  const handleSubmit = () => {
//   const editedBook = { title, writer, description }
//   loaderUpdateBook( { params, editedBook })
//  }
 


  return (
    <>
      <h3>¿Qué quieres actualizar?</h3>
      {/* <form onSubmit={handleSubmit} >

        <input type="text" name="title" onChange={handleTitleChange} placeholder={book.title}/>
        <input type="text" name="writer" onChange= {handleWriterChange} placeholder={book.write}/>
        <input type="text" name="book_description"  onChange={handleDescriptionChange} placeholder={book.book_description}/>
        <button type="submit"> Atualizar✨</button>

      </form> */}
    </>
  )
}
