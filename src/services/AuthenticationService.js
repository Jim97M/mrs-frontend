import axios from "axios";

const API_URL = "http://localhost:8081/api/auth";

export const register = () => {
    axios.post(API_URL + "signin", {
       username,
       email,
       password
    });
};


 const login = () => {
    axios.post(API_URL + "signin", {
        email,
        password
    }).then(response => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
    })

    return response.data;
}


 const logout = () => {
    localStorage.removeItem()
};

const AuthService = {
    register,
    login
};

export default AuthService;
 

