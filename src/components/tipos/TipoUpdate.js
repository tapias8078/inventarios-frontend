import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTipoPorId, editTipo } from '../../services/tipoEquipoService'
import Swal from 'sweetalert2'


export const TipoUpdate = () => {


  const { tipoId = '' } = useParams()
  const [tipo, setTipo] = useState({})
  const [valoresForm, setValoresForm] = useState({})
  const { nombre = '', estado = '' } = valoresForm


  useEffect(() => {
    getTipo()
  }, [tipoId])

  useEffect(() => {
    setValoresForm({      
      nombre: tipo.nombre,
      estado: tipo.estado
    });
  }, [tipo]);



  const handleOnChange = ({ target }) => {
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value })

  }

  


  const getTipo = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await getTipoPorId(tipoId);
      setTipo(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const tipo = {
      nombre, estado
    }
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      })
      Swal.showLoading()
      const { data } = await editTipo(tipoId,tipo)
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
                <h3> Actualizar Tipo</h3>                
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
                  <label className='form-label mb-2'>Tipo</label>
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
