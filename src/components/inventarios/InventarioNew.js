import React, { useState, useEffect} from 'react'
import { getUsuarios} from '../../services/usuariosService';
import { getMarcas} from '../../services/marcaService';
import { getTiposEquipos} from '../../services/tipoEquipoService';
import {getEstadosEquipos} from '../../services/estadoEquipoService';

export const InventarioNew = ({handleOpenModal}) => {

    const [ usuarios, setUsuarios] = useState ([]);
    const [ marcas, setMarcas] = useState ([]);
    const [ tipos, setTipos] = useState ([]);
    const [ estados, setEstados] = useState ([]);

    useEffect (() => {
        const listarUsuarios = async () => {

            try {
                const { data} = await getUsuarios();
                setUsuarios (data);
                console.log(data);
            } catch (error){
                console.log (error);
            }
            
        }
        listarUsuarios();

    }, []); 
       

    useEffect (() => {
        const listarMarcas = async () => {

            try {
                const { data} = await getMarcas();
                setMarcas(data);
                console.log(data);
            } catch (error){
                console.log (error);
            }
            
        }
        listarMarcas();

    }, []); 

    useEffect (() => {
        const listarTipos = async () => {

            try {
                const { data} = await getTiposEquipos();
                setTipos(data);
                console.log(data);
            } catch (error){
                console.log (error);
            }
            
        }
        listarTipos();

    }, []); 

    useEffect (() => {
        const listarEstados = async () => {

            try {
                const { data} = await getEstadosEquipos();
                setEstados(data);
                console.log(data);
            } catch (error){
                console.log (error);
            }
            
        }
        listarEstados();

    }, []); 

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Nuevo Inventario</h3>
                        <i className='fa-solid fa-xmark' onClick={handleOpenModal}></i>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <hr/>
                </div>
            </div>
            <form>
                <div className='row'>
                    <div className='col'>
                        <div className='mb-3'>
                        <label className='form-label'>Serial</label>
                        <input type="text" name='serial' className='form-control' />
                        </div>                        
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Modelo</label>
                            <input type="text" name='modelo' className='form-control' />
                        </div>  
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Descripción</label>
                            <input type="text" name='descripcion' className='form-control' />
                        </div>  
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Color</label>
                            <input type="text" name='color' className='form-control' />
                        </div>  
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='mb-3'>
                        <label className='form-label'>Foto</label>
                        <input type="text" name='foto' className='form-control' />
                        </div>                        
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Fecha Compra</label>
                            <input type="date" name='fechaCompra' className='form-control' />
                        </div>  
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Precio</label>
                            <input type="number" name='precio' className='form-control' />
                        </div>  
                    </div>                    
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Usuario</label>
                            <select className="form-select">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                             <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>  
                    </div>                    
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='mb-3'>
                        <label className='form-label'>Marca</label>
                        <input type="text" name='marca' className='form-control' />
                        </div>                        
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Tipo</label>
                            <input type="text" name='tipoEquipo' className='form-control' />
                        </div>  
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            <label className='form-label'>Estado Equipo</label>
                            <input type="text" name='estadoEquipo' className='form-control' />
                        </div>  
                    </div>                    
                </div>

            </form>
        </div>
    </div>
  )
}

export {InventarioNew}