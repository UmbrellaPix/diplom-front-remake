import axios from 'axios'

const instance = axios.create({
    baseURL:'http://192.168.0.10:2000/',
    withCredentials:true,
    headers:{
        accept:'application/json'
    }
})

export default instance