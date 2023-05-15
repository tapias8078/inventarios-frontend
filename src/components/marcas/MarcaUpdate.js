import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMarcaPorId, editMarca } from '../../services/marcaService'
import Swal from 'sweetalert2'


export const MarcaUpdate = () => {


  const { marcaId = '' } = useParams()
  const [marca, setMarca] = useState({})
  const [valoresForm, setValoresForm] = useState({})
  const { nombre = '', estado = '' } = valoresForm


  useEffect(() => {
    getMarca()
  }, [marcaId])

  useEffect(() => {
    setValoresForm({      
      nombre: marca.nombre,
      estado: marca.estado
    });
  }, [marca]);



  const handleOnChange = ({ target }) => {
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value })

  }

  


  const getMarca = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await getMarcaPorId(marcaId);
      setMarca(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const marca = {
      nombre, estado
    }
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      })
      Swal.showLoading()
      const { data } = await editMarca(marcaId,marca)
      window.history.back()   
      console.log(data);
      Swal.close()      
    } catch (error) {
      console.log(error);
      Swal.close();
      let mensaje;
      if (error && error.response && error.response.data) {
        mensaje = error.response.data;
      } else {
        mensaje = 'Ocurrio un error, por favor intente de nuevo';
      }
      Swal.fire('Error', mensaje, 'error');
    }
  }


  return (
    <div className='modalBackground'>
      <div className='sidebar'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='sidebar-header'>
                <h3> Actualizar Marca</h3>                
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr />
            </div>
          </div>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className='row'>
              <div className='col'>
                <div className='mb-4'>
                  <label className='form-label mb-2'>Marca</label>
                  <input type="text" name='nombre' required
                    onChange={(e) => handleOnChange(e)} value={nombre} className='form-control' />
                </div>
                </div>
                <div className='col'>
                <div className='mb-3'>
                  <label className='form-label'>Estado</label>
                  <select onChange={(e) => handleOnChange(e)} name='estado' required className='form-control'>
                    <option value='Seleccione'>{`${estado}`}</option>
                    <option value='Activo'>Activo</option>
                    <option value='Inactivo'>Inactivo</option>
                  </select>
                </div>
                </div>
              
            </div>
            <button className='btn btn-success'>Actualizar</button>
          </form>

        </div>
      </div>
    </div>

  )
}
