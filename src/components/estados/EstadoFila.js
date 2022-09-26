import React from 'react'


export const EstadoFila = (props) => {

    const {estado, index} = props;



  return    <tr>          
            <th scope='row'>{index}</th>
            <td>{estado.nombre}</td>
            <td>{estado.estado}</td>
            <td>{estado.fechaCreacion}</td>
            <td>{estado.fechaActualizacion}</td>
            <td>
              <button>
              Actualizar
              </button>
            </td>
          </tr>
          
}