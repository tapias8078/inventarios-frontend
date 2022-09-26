import React from 'react'


export const UsuarioFila = (props) => {

    const {usuario, index} = props;



  return    <tr>          
            <th scope='row'>{index}</th>
            <td >{usuario.nombre}</td>
            <td >{usuario.email}</td>
            <td >{usuario.estado}</td>
            <td >{usuario.fechaCreacion}</td>
            <td >{usuario.fechaActualizacion}</td>
            <td>
              <button>
              Actualizar
              </button>
            </td>
          </tr>
          
}