import React from 'react'


export const TipoFila = (props) => {

    const {tipo, index} = props;



  return    <tr>          
            <th scope='row'>{index}</th>
            <td >{tipo.nombre}</td>
            <td >{tipo.estado}</td>
            <td >{tipo.fechaCreacion}</td>
            <td >{tipo.fechaActualizacion}</td>
            <td>
              <button>
              Actualizar
              </button>
            </td>
          </tr>
          
}