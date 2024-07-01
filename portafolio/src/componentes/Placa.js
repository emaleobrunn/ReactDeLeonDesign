import React from 'react'
import imagen1 from '../assets/imagen1.jpeg'
import imagen2 from '../assets/imagen2.jpeg'
import '../Imagen.css'

const imagenes = [imagen1, imagen2]


const Placa = () => {
  return (
    <div>
      {imagenes.map((imagen, index) => (
        <div key={index}>
          <img className= 'placa' src={imagen} alt={`Imagen ${index + 1}`} />
          <p>Descripción de la publicación</p>
        </div>
      ))}
    </div>
  )
}

export default Placa