import axios from "axios";

export const signup = (firstName, lastName, email, password) => {
    return axios.post("/api/user_securities", {
        email: email,
        plainPassword: password,
        firstName: firstName,
        lastName: lastName,
    }).then((response) => {
        console.log(response.data);

        return response.data;
    })
}