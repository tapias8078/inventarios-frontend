import React, { useState, useEffect } from 'react';
import { UsuarioFila } from './UsuarioFila';
import { UsuarioNew } from './UsuarioNew';
import { getUsuarios } from '../../services/usuarioService';
import Swal from 'sweetalert2';


export const UsuarioView = () => {
  
  
  const [ usuarios, setUsuarios] = useState([])
  const [openModal,setOpenModal]=useState(false) 
  
  
  useEffect(()=>{
    listarUsuarios()
  },[])
  
  const listarUsuarios = async()=>{
    try{
      Swal.fire({
        allowOutsideClick:false,
        text:'Cargando'
      })
      Swal.showLoading()
      const {data}=await getUsuarios()
      setUsuarios(data)
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
      <h3>Usuarios</h3>
      <hr/>
    </div>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha de Creacion</th>
      <th scope="col">Fecha de Actualizacion</th>
      <th scope="col"></th>      
    </tr>
  </thead>
  <tbody>    
      {
        usuarios.map((usuario, index)=>{
          return <UsuarioFila key={usuario._id} usuario={usuario} index={index+1}/>
        })
      }   
  </tbody>
</table>
  
         {
            openModal ? <UsuarioNew handleOpenModal={handleOpenModal}
                        listarUsuarios={listarUsuarios}/> :
              (<button className='btn btn-primary fab' onClick={handleOpenModal}>
                <i className='fa-solid fa-plus'></i>
              </button>)
                      
            }
    </div>
  )
}
