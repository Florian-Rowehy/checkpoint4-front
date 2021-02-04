import axios from 'axios';

const url = "http://localhost:8000/api";

function find(uri) {
    return axios
        .get(url+uri)
        .then(res=>res.data)
        .then(data=>data['hydra:member']);
}

function findBasic(uri) {
    return axios
        .get(url+uri)
        .then(res=>res.data);
}

const appService = {
    find,
    findBasic,
}

export default appService;