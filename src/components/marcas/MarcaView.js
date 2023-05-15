import React, { useState, useEffect } from 'react';
import { MarcaNew } from './MarcaNew';
import { getMarcas } from '../../services/marcaService';
import Swal from 'sweetalert2';
import { MarcaFila } from './MarcaFila';

export const MarcaView = () => {
  
  
  const [ marcas, setMarcas] = useState([])
  const [openModal,setOpenModal]=useState(false) 
  
  
  
  useEffect(()=>{
    listarMarcas()
  },[])
 

  
  
  
  const listarMarcas = async()=>{
    try{
      Swal.fire({
          allowOutsideClick:false,
          text:'Cargando'
        })
        Swal.showLoading()
        const {data}=await getMarcas()
        setMarcas(data)
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
      <h3>Marcas</h3>
      <hr/>
    </div>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Marca</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha de Creacion</th>
      <th scope="col">Fecha de Actualizacion</th>
      <th scope="col"></th>      
    </tr>
  </thead>
  <tbody>    
      {
        marcas.map((marca, index)=>{
          return <MarcaFila key={marca._id} marca={marca} index={index+1} />
        })
      }   
  </tbody>
</table>
  
         {
            openModal ? <MarcaNew handleOpenModal={handleOpenModal}
                        listarMarcas={listarMarcas}/> :
              (<button className='btn btn-primary fab' onClick={handleOpenModal}>
                <i className='fa-solid fa-plus'></i>
              </button>)
                      
            }
    </div>
  )
}
