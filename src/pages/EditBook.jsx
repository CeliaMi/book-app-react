import React from 'react'

export const EditBook = () => {
  return (
    <form>
      <input type="text" name="title" placeholder='title'/>
      <input type="text" name="writer"  placeholder='writer'/>
      <input type="text" name="book_description"  placeholder='book_description'/>
    </form>
  )
}
