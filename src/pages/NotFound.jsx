import React from 'react'
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError()
  return (
    <>
            <h1>404🙃</h1>
            <p>Ups!Page not found</p>
            <p>{error.statusText || error.message}</p>
            <Link to='/'> Back to Home </Link>
    </>
  )
}

export default NotFound