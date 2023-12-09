import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" >
        <div className="container nav justify-content-center col-md-4">
           <NavLink type="button" className="btn btn-outline-light ms-1" to="/">Todos mis Libros</NavLink> 
           <NavLink className="btn btn-outline-light ms-1 " to="/newBook">añadir nuevo libro</NavLink> 
        </div>
    </nav>
  )
}

export default Navbar