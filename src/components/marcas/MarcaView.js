import React, { useState, useEffect } from 'react';
import { getMarcas } from '../../services/marcaService';
import { MarcaNew } from './MarcaNew';
import Swal from 'sweetalert2';

export const MarcaView = () => {
  
  const [ marcas, setMarcas ] = useState ([]); 
  const [openModal,setOpenModal]=useState(false)
   

  const listarMarcas = async () => {
    try {
      Swal.fire({
        allowOutsideClick:false,
        text:'Cargando...'
    });
    Swal.showLoading();
      const {data}= await getMarcas(); 
      setMarcas(data);
      Swal.close();
    } catch (error) {
      console.log(error); 
      Swal.close();
    }
  }

  useEffect(()=>{
    listarMarcas();    
  },[]);

 

  const handleOpenModal = () => {
    console.log('asasas');
    setOpenModal(!openModal)
  }

  return (
    <div className='container'>
      <div className='mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4'>
          tabla marcas
      </div>
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
