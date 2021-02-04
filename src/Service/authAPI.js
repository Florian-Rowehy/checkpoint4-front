import axios from 'axios';

function login(credentials) {
    return axios
        .post("http://localhost:8000/api/login_check", credentials)
        .then(res => res.data)
        .then(data=>{
            const token=data.token;
            window.localStorage.setItem("authToken", token);
            axios.defaults.headers["Authorization"] = "Bearer " + token;
            return true
        })
}

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

export default {
    login,
    logout
};