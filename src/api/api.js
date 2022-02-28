import axios from 'axios'

/* Contém o link da API */
const api = axios.create({
    baseURL: 'http://localhost:3001/',
})

export default api