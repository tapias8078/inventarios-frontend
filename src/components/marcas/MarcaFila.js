import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'


export const MarcaFila = (props) => {

    const {marca, index} = props

  return    <tr>          
            <th scope='row'>{index}</th>
            <td >{marca.nombre}</td>
            <td >{marca.estado}</td>
            <td >{moment(marca.fechaCreacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td >{moment(marca.fechaActualizacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>
             <Link to={`marcas/edit/${marca._id}`}>
              <button className='btn btn-success'>Actualizar</button>
             </Link>
            </td>
          </tr>
          
}