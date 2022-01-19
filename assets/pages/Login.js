import React from 'react';
import "../styles/pages/Login.css"

const Login = () => {
    return (
        <form>
        <div className="login">
            <label for="name "> Nom: </label>
            <input type="text" id="name " name="username"/>
        </div>
        </form>
    );
};

export default Login;