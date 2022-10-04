import React, {useState} from 'react'
import Swal from 'sweetalert2'
import { crearMarca } from '../../services/marcaService'

export const MarcaNew = ({handleOpenModal, listarMarcas}) => {  

    const [valoresForm, setValoresForm] = useState({})
    const {nombre='', estado=''} = valoresForm



    const handleOnChange = ({ target }) => {
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value })

    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const marca = {
            nombre,estado
        }
        
        try {
            Swal.fire({
                allowOutsideClick:false,
                text:'Cargando...'
            })
            Swal.showLoading()
            const {data} = await crearMarca(marca);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarMarcas()            
        } catch (error) {
            console.log(error);
            Swal.close();
            let mensaje;
        if (error && error.response && error.response.data){
            mensaje = error.response.data;
        } else {
            mensaje = 'Ocurrio un error, por favor intente de nuevo';
        }
        Swal.fire('Error', mensaje, 'error');
        }
        
    }

  return (<>
  <div className='modalBackground'>
    <div className='sidebar'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='sidebar-header'>
              <h3>Nueva Marca</h3>
              <i className='fa-solid fa-xmark' onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className='row'>
            <div className='col'>
                <hr/>
            </div>
        </div>
    <form onSubmit={(e)=>handleOnSubmit(e)}>        
          <div className='row'>
            <div className='col'>
              <div className='mb-4'>
                <label className='form label mb-2'>Marca</label>
                <input type='text' name='nombre' value={nombre} onChange={(e) => handleOnChange(e)} required className='form-control' />
              </div>
            </div>          
            <div className='col'>
                            <div className='mb-3'>
                                <label className='form-label'>Estado</label>
                                <select onChange={(e) => handleOnChange(e)} name='estado' required className='form-control'>
                                    <option value='seleccione'>--SELECCIONE--</option>
                                    <option value='Activo'>Activo</option>
                                    <option value='Inactivo'>Inactivo</option>
                                </select>
                                             
                                
                            </div>
            </div>
          </div>
          <button className='btn btn-primary'>Crear</button>
        </form>
      </div>
    </div>
    </div>
    
    </>
  )
}
