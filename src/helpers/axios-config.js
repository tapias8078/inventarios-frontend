import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localHost:3000'
})

export{
    axiosInstance
}
