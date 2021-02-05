import appService from './appService';
import axios from 'axios';

const url = "http://localhost:8000/api";

function findAll() {
    return appService.find('/users');
}

function addToCart(articleId) {
    return axios
        .post(url+"/articles/"+articleId+"/add", {})
        .then(res => res.data)
}

function getCart() {
    return axios
        .get(url+'/cart')
        .then(res => res.data);
}

const usersAPI = {
    findAll,
    addToCart,
    getCart
}

export default usersAPI;