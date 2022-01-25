import React from 'react';
import "../styles/pages/account.css"
import Accountcomponent from "../components/Account/accountcomponent";

const Account = () => {
    return (
        <div>

        <div className={"headerleft"} >
            <nav className="nav flex-column">
                <p className="nav-link" aria-current="page" > Mes infos </p>
                <p className="nav-link" > Mes commandes </p>
                <p className="nav-link" > Carnet d'adresses</p>
                <p className="nav-link">Like </p>
                <p className="nav-link">Changer de mot de passe  </p>
                <p className="nav-link">Déconnexion </p>


            </nav>

            <Accountcomponent/>

        </div>




        </div>
    );
};

export default Account;