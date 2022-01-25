import React from 'react';
import "../../styles/pages/account.css"

const Accountcomponent = () => {
    return (
        <div>

            <div className="mb-4">
                <label htmlFor="formGroupExampleInput" className="form-label">Prénom :</label>
                <input type="text" className="form-controll" id="formGroupExampleInput"
                       placeholder="Alexis "/>
            </div>
            <div className="mb-4">
                <label htmlFor="formGroupExampleInput2" className="form-label">Nom :</label>
                <input type="text" className="form-controll" id="formGroupExampleInput2"
                       placeholder="Majchrzak "/>
            </div>
            <div className="mb-4">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email :</label>
                <input type="email" className="form-controll" id="formGroupExampleInput2"
                       placeholder="alexis.stockY@gmail.com "/>
            </div>
            <div className="mb-4">
                <label htmlFor="formGroupExampleInput2" className="form-label">Téléphone :</label>
                <input type="email" className="form-controll" id="formGroupExampleInput2"
                       placeholder="+33 00 00 00 00  "/>
            </div>

            <button className={"boutonaccount"} > Confirmer </button>

        </div>
    );
};

export default Accountcomponent;