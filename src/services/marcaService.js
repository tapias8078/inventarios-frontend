import {axiosInstance} from '../helpers/axios-config';

const getMarcas = () => {
    return axiosInstance.get('marca', {
        headers: {
            'Content-type' : 'application/json'
        }
    })
}

//todo: crrar, actualizar, listar por id

export {
    getMarcas
}