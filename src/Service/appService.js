import axios from 'axios';

const url = "http://localhost:8000/api";

function findBasic(uri) {
    return axios
        .get(url+uri)
        .then(res=>res.data);
}

function find(uri) {
    return findBasic(uri)
        .then(data=>data['hydra:member']);
}

const appService = {
    find,
    findBasic,
}

export default appService;