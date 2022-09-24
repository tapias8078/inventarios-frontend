import React, { useState, useEffect } from 'react'
import { getMarcas } from '../../services/marcaService'
import { crearMarca } from '../../services/marcaService'
import Swal from 'sweetalert2'

const MarcaView = () => {

  const [valoresForm, setValoresForm] = useState({})
  const [marcas, setMarcas] = useState([])

  const { marca = '', estado = '' } = valoresForm

  const estados=['Activo','Inactivo']

  useEffect(()=>{
    const listarMarcas= async () => {
      try {
        const {data} = await getMarcas()
        setMarcas(data)
        console.log(data)
      } catch (error) {
        console.log(error);
      }    
  }
  listarMarcas()
  },[])

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value })
    
  }

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      const marca = {
          marca, estado
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

  
  return (
    <div className='sidebar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='sidebar-header'>
              <h3>Marcas</h3>
            </div>
          </div>
        </div>
        <hr/>
        <form onSubmit={(e)=>handleOnSubmit(e)}>
          <div className='row'>
            <div className='col'>
              <div className='mb-4'>
                <label className='form label mb-2'>Marca</label>
                <input type='text' name='marca' required value={marca} className='form-control' onChange={(e) => handleOnChange(e)}/>
              </div>
            </div>          
            <div className='col'>
                            <div className='mb-3'>
                                <label className='form-label'>Estado</label>
                                <select className='form-select' name='estado' value={estado} required
                                onChange={(e) => handleOnChange(e)}>
                                  <option value="">--SELECCIONE--</option>
                                  {
                                    estados.map((estado)=>{
                                      return <option>{estado}</option>
                                    })
                                  }
                                </select>               
                                
                            </div>
                        </div>
          </div>
          <button className='btn btn-primary'>Crear</button>
        </form>
      </div>
    </div>

  )
}

export { MarcaView }