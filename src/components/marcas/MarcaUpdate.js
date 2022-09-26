import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMarcaPorId, editMarca } from '../../services/marcaService';
import Swal from 'sweetalert2';

export const MarcaUpdate = () => {

  const { marcaId = '' } = useParams();
  const [marca, setMarca] = useState({});
  const [valoresForm, setValoresForm] = useState()  
 

  const { nombre = '', estado = ''} = valoresForm


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

  useEffect(() => {
    getMarca();
  }, [marcaId]);

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const marca = {
      nombre, estado
    }

    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await editmarca(marcaId, marca);
      console.log(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
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
    <div className=' container-fluid mt-3 mb-2'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Detalle activo</h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={marca?.foto} />
            </div>
            <div className='col-md-8'>
              <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Serial</label>
                      <input type="text" name='serial' required
                        onChange={(e) => handleOnChange(e)} value={serial} className='form-control' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Modelo</label>
                      <input type="text" name='modelo' required
                        onChange={(e) => handleOnChange(e)} value={modelo} className='form-control' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Descripción</label>
                      <input type="text" name='descripcion' required
                        onChange={(e) => handleOnChange(e)} value={descripcion} className='form-control' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Color</label>
                      <input type="text" name='color' required
                        onChange={(e) => handleOnChange(e)} value={color} className='form-control' />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Foto</label>
                      <input type="text" name='foto' required
                        onChange={(e) => handleOnChange(e)} value={foto} className='form-control' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Fecha Compra</label>
                      <input type="date" name='fechaCompra' required
                        onChange={(e) => handleOnChange(e)} value={fechaCompra} className='form-control' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Precio</label>
                      <input type="number" name='precio' required
                        onChange={(e) => handleOnChange(e)} value={precio} className='form-control' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Usuario</label>
                      <select className="form-select"
                        name='usuario' value={usuario} required
                        onChange={(e) => handleOnChange(e)}>
                        <option value="">--SELECCIONE--</option>
                        {
                          usuarios.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}>{nombre}</option>
                          })
                        }

                      </select>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Marca</label>
                      <select className='form-select'
                        name='marca' value={marca} required
                        onChange={(e) => handleOnChange(e)}>
                        <option value="">--SELECCIONE--</option>
                        {
                          marcas.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}>{nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Tipo Equipo</label>
                      <select className='form-select'
                        name='tipo' value={tipo} required
                        onChange={(e) => handleOnChange(e)}>
                        <option value="">--SELECCIONE--</option>
                        {
                          tipos.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}>{nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Estado Equipo</label>
                      <select className='form-select'
                        name='estado' value={estado} required
                        onChange={(e) => handleOnChange(e)}>
                        <option value="">--SELECCIONE--</option>
                        {
                          estados.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}>{nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button className='btn btn-primary' >Actualizar</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
