import React, { useState, useEffect } from 'react';
import { getInventarios } from '../../services/InventarioService';

export const InventarioView = () => {
  
  const [ inventarios, setInventarios ] = useState ([]); 

  const listarInventarios = async () => {
    try {
      const {data}= await getInventarios();
      console.log(data); 
      setInventarios(data)
    } catch (error) {
      console. log(error); 
    }
  }

  useEffect(()=>{
    listarInventarios ();    
  },[]);

  const handleOpenModal = () => {
    console.log('asasas');
    setOpenModal(!openModal)
  }

  return (
    <div className='container-fluid'>
      <div className='mt-2 mb-2 row row-cols-1 row-cols-md-5 g-4'>
          {
            inventarios.map((inventario) => {
              return <InventarioCard key={inventario._id} inventario={inventario}/>
            })
          }
      </div>
          {
            openModal ? <InventarioNew/>:(
              <button className='btn btn-primary fab' onClick={handleOpenModel}>
                <i className='fa-solid fa-plus'></i>
              </button>
            )
            
          }
    </div>
  )
        }

// export  {InventarioView}