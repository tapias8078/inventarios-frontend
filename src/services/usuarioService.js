import {axiosInstance} from '../helpers/axios-config';

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        headers: {
            'Content-type' : 'application/json'
        }
    })
}

const crearUsuarios = (data) => {
    return axiosInstance.post('usuarios',data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}
const editUsuarios = (usuariosId,data) => {
    return axiosInstance.put(`usuarios/${usuariosId}`,data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}

const getUsuariosPorId = (usuariosId) => {
    return axiosInstance.get(`usuarios/${usuariosId}`,{
         headers : {
             'Content-type':'application/json'
         }
     })
 }
 

//todo: crrar, actualizar, listar por id

export {
    getUsuarios, crearUsuarios, editUsuarios, getUsuariosPorId
}