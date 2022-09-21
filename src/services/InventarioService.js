import {axiosInstance} from '../helpers/axios-config'

const getInventarios = () => {
    const resp = axiosInstance.get('inventario',{
        headers : {
            'Content-type':'application/json'
        }
    })
}

const crearInventario = (data) => {
    const resp = axiosInstance.post('inventario',data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}
const editInventario = (inventarioId,data) => {
    const resp = axiosInstance.post(`inventario/${inventarioId}`,data,{
        headers : {
            'Content-type':'application/json'
        }
    })
}


export {
    getInventarios, crearInventario, editInventario
}
