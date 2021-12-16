import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://ecommerce-residencia.herokuapp.com/'

});

export default Api;