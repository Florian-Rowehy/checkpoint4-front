import axios from 'axios';
import jwtDecode from 'jwt-decode';

const url = "http://localhost:8000/api";

function setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
        const jwtData = jwtDecode(token);
        if (jwtData.exp*1000 > (new Date()).getTime()) {
            setAxiosToken(token);
            return true;
        } else {
            logout()
        }
    }
    return false;
}

function login(credentials) {
    return axios
        .post(url+"/login_check", credentials)
        .then(res => res.data)
        .then(data=>{
            const token=data.token;
            window.localStorage.setItem("authToken", token);
            setAxiosToken(token);
            return true
        })
}

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

const auth = {
    login,
    logout,
    setup,
};

export default auth;