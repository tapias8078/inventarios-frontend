import {axiosInstance} from '../helpers/axios-config';

const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-type' : 'application/json'
        }
    })
}

const crearTiposEquipo = (data) => {
    return axiosInstance.post('tipo-equipo',data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}
const editTiposEquipo = (tiposEquipoId,data) => {
    return axiosInstance.put(`tipo-equipo/${tiposEquipoId}`,data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}

const getTiposEquipoPorId = (tiposEquipoId) => {
    return axiosInstance.get(`tipo-equipo/${tiposEquipoId}`,{
         headers : {
             'Content-type':'application/json'
         }
     })
 }
 

//todo: crrar, actualizar, listar por id

export {
    getTiposEquipos, crearTiposEquipo, editTiposEquipo, getTiposEquipoPorId
}