import React from 'react'


export const MarcaFila = (props) => {

    const {marca, index} = props;



  return    <tr>          
            <th scope='row'>{index}</th>
            <td >{marca.nombre}</td>
            <td >{marca.estado}</td>
            <td >{marca.fechaCreacion}</td>
            <td >{marca.fechaActualizacion}</td>
            <td>
              <button>
              Actualizar
              </button>
            </td>
          </tr>
          
}