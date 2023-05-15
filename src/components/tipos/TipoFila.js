import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'


export const TipoFila = (props) => {

    const {tipo, index} = props;

    



  return    <tr>          
            <th scope='row'>{index}</th>
            <td >{tipo.nombre}</td>
            <td >{tipo.estado}</td>
            <td >{moment(tipo.fechaCreacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td >{moment(tipo.fechaActualizacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>
            <Link to={`tipos/edit/${tipo._id}`}>
              <button className='btn btn-success'>Actualizar</button>
             </Link>
            </td>
          </tr>
          
}