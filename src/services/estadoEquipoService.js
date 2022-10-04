import {axiosInstance} from '../helpers/axios-config';

const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-type' : 'application/json'
        }
    })
}

const crearEstadoEquipo = (data) => {
    return axiosInstance.post('estado-Equipo',data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}
const editEstadoEquipo = (estadosEquipoId,data) => {
    return axiosInstance.put(`estado-Equipo/${estadosEquipoId}`,data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}

const getEstadoEquipoPorId = (estadosEquipoId) => {
    return axiosInstance.get(`estado-Equipo/${estadosEquipoId}`,{
         headers : {
             'Content-type':'application/json'
         }
     })
 }
 
//todo: crear, actualizar, listar por id

export {
    getEstadosEquipos, getEstadoEquipoPorId, crearEstadoEquipo, editEstadoEquipo
}