import React, { useState, useEffect } from 'react';
import { EstadoNew } from './EstadoNew';
import { getEstadosEquipos } from '../../services/estadoEquipoService';
import Swal from 'sweetalert2';
import { EstadoFila } from './EstadoFila';

export const EstadoView = () => {
  
  
  const [ estados, setEstados] = useState([])
  const [openModal,setOpenModal]=useState(false) 
  
  
  

  useEffect(()=>{
    listarEstados()
  },[])
  
  
  const listarEstados = async()=>{
    try{
      Swal.fire({
        allowOutsideClick:false,
        text:'Cargando'
      })
      Swal.showLoading()
      const {data}=await getEstadosEquipos()
      setEstados(data)
      Swal.close()
    }catch(error){
      console.log(error);
      Swal.close()
    }
  }
  
  
    const handleOpenModal = () => {
      console.log('asasas');
      setOpenModal(!openModal)
    }


  return (
    <div className='container mt-3 card'>          
    <div>
      <h3>Estados</h3>
      <hr/>
    </div>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Estado Equipo</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha de Creacion</th>
      <th scope="col">Fecha de Actualizacion</th>
      <th scope="col"></th>      
    </tr>
  </thead>
  <tbody>    
      {
        estados.map((estadoEquipo, index)=>{
          return <EstadoFila key={estadoEquipo._id} estadoEquipo={estadoEquipo} index={index+1}/>
        })
      }   
  </tbody>
</table>
  
         {
            openModal ? <EstadoNew handleOpenModal={handleOpenModal}
                        listarEstados={listarEstados}/> :
              (<button className='btn btn-primary fab' onClick={handleOpenModal}>
                <i className='fa-solid fa-plus'></i>
              </button>)
                      
            }
    </div>
  )
}
