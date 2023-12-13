import React from 'react'

const Alert = () => {
  return (
    <div className="bg-indigo-100 border-t border-b border-indigo-500 text-blue-700 px-4 py-3" role="alert">
        <p className="font-bold">Atención</p>
        <p className="text-sm">No olvide Rellenar todos los campos.</p>
    </div>
  )
}

export default Alert