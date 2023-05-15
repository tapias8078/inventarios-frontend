import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../services/usuarioService';
import { getMarcas } from '../../services/marcaService';
import { getTiposEquipos } from '../../services/tipoEquipoService';
import { getEstadosEquipos } from '../../services/estadoEquipoService';
import {crearInventario} from '../../services/InventarioService'
import Swal from 'sweetalert2';


export const InventarioNew = ({ handleOpenModal, listarInventarios }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [estados, setEstados] = useState([]);
    const [valoresForm, setValoresForm] = useState({})
    const { serial = '', modelo = '', descripcion = '', color = '', foto = '', fechaCompra = '', precio = '',
        usuario = '', marca = '', tipo = '', estado = '' } = valoresForm;



    useEffect(() => {
        const listarUsuarios = async () => {

            try {
                const { data } = await getUsuarios();
                setUsuarios(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }
        listarUsuarios();
    }, []);




    useEffect(() => {
        const listarMarcas = async () => {

            try {
                const { data } = await getMarcas();
                setMarcas(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }
        listarMarcas();

    }, []);

    useEffect(() => {
        const listarTipos = async () => {

            try {
                const { data } = await getTiposEquipos();
                setTipos(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }
        listarTipos();

    }, []);

    useEffect(() => {
        const listarEstados = async () => {

            try {
                const { data } = await getEstadosEquipos();
                setEstados(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }
        listarEstados();

    }, []);

    const handleOnChange = ({ target }) => {
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value })

    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const inventario = {
            serial,modelo,descripcion,color,foto,fechaCompra,precio,
            usuario:        {_id:usuario},
            marca:          {_id:marca},
            tipoEquipo:     {_id:tipo},
            estadoEquipo:   {_id:estado}
        }
        
        try {
            Swal.fire({
                allowOutsideClick:false,
                text:'Cargando...'
            })
            Swal.showLoading()
            const {data} = await crearInventario(inventario);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarInventarios();
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
        <div className='modalBackground'>
        <div className='sidebar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-header'>
                            <h3>Nuevo Activo</h3>
                            <i className='fa-solid fa-xmark' onClick={handleOpenModal}></i>
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
                            <button className='btn btn-primary'>Guardar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}
