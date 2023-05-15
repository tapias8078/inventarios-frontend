import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'


export const UsuarioFila = (props) => {

    const {usuario, index} = props;



  return    <tr>          
            <th scope='row'>{index}</th>
            <td >{usuario.nombre}</td>
            <td >{usuario.email}</td>
            <td >{usuario.estado}</td>
            <td >{moment(usuario.fechaCreacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td >{moment(usuario.fechaActualizacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>
            <Link to={`usuarios/edit/${usuario._id}`}>
              <button className='btn btn-success'>Actualizar</button>
             </Link>
            </td>
          </tr>
          
}