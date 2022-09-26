import {axiosInstance} from '../helpers/axios-config';

const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-type' : 'application/json'
        }
    })
}

const crearEstadosEquipo = (data) => {
    return axiosInstance.post('estado-Equipo',data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}
const editEstadosEquipo = (estadosEquipoId,data) => {
    return axiosInstance.put(`estado-Equipo/${estadosEquipoId}`,data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}

const getEstadosEquipoPorId = (estadosEquipoId) => {
    return axiosInstance.get(`estado-Equipo/${estadosEquipoId}`,{
         headers : {
             'Content-type':'application/json'
         }
     })
 }
 
//todo: crear, actualizar, listar por id

export {
    getEstadosEquipos, getEstadosEquipoPorId, crearEstadosEquipo, editEstadosEquipo
}