import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localHost:4000'
})

export{
    axiosInstance
}
