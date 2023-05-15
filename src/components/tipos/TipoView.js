import React, { useState, useEffect } from 'react';
import { TipoNew } from './TipoNew';
import { getTiposEquipos } from '../../services/tipoEquipoService';
import { TipoFila } from './TipoFila';
import Swal from 'sweetalert2';


export const TipoView = () => {
  
  
  const [ tipos, setTipos] = useState([])
  const [openModal,setOpenModal]=useState(false) 
  
  
  
  const listarTipos = async()=>{
    try{
      Swal.fire({
        allowOutsideClick:false,
        text:'Cargando'
      })
      Swal.showLoading()
      const {data}=await getTiposEquipos()
      setTipos(data)
      Swal.close()
    }catch(error){
      console.log(error);
      Swal.close()
    }
  }
  
  
  useEffect(()=>{
    listarTipos()
  },[])
  
  
    const handleOpenModal = () => {
      console.log('asasas');
      setOpenModal(!openModal)
    }


  return (
    <div className='container mt-3 card'>          
    <div>
      <h3>Tipos Equipo</h3>
      <hr/>
    </div>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tipo</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha de Creacion</th>
      <th scope="col">Fecha de Actualizacion</th>
      <th scope="col"></th>      
    </tr>
  </thead>
  <tbody>    
      {
        tipos.map((tipo, index)=>{
          return <TipoFila key={tipo._id} tipo={tipo} index={index+1}/>
        })
      }   
  </tbody>
</table>
  
         {
            openModal ? <TipoNew handleOpenModal={handleOpenModal}
                        listarTipos={listarTipos}/> :
              (<button className='btn btn-primary fab' onClick={handleOpenModal}>
                <i className='fa-solid fa-plus'></i>
              </button>)
                      
            }
    </div>
  )
}
