import React from 'react'
import { Link } from 'react-router-dom'


const InventarioCard = (props) => {
    const { inventario } = props
    return (
        <div className='col'>
            <div className='card'>
                <img src={inventario.foto} className="card-img-top foto ms-1" alt="..." />
                <div className='card-body'>
                    <h5 className='card-title'>Características</h5>
                    <hr />
                    <p className='card-text'>{`Serial: ${inventario.serial}`}</p>
                    <p className='card-text'>{`Marca: ${inventario.marca.nombre}`}</p>
                    <p className='card-text'>{`Usuario: ${inventario.usuario.nombre}`}</p>
                    <Link to={`inventarios/edit/${inventario._id}`}>Ver Más...</Link>
                </div>
                
            </div>
        </div>
    )
}

export { InventarioCard }