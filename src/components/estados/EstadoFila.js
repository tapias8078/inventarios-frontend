import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'


export const EstadoFila = (props) => {

    const {estadoEquipo, index} = props;



  return    <tr>          
            <th scope='row'>{index}</th>
            <td>{estadoEquipo.nombre}</td>
            <td>{estadoEquipo.estado}</td>
            <td>{moment(estadoEquipo.fechaCreacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>{moment(estadoEquipo.fechaActualizacion).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>
            <Link to={`estados/edit/${estadoEquipo._id}`}>
              <button className='btn btn-success'>Actualizar</button>
             </Link>
            </td>
          </tr>
          
}