import React from 'react';
import "../styles/pages/inscription.css"

const Inscription = () => {
    return (
        <div>

            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://static.wixstatic.com/media/604f01_0d974a5574604211806048e4084a83a8~mv2.gif" className="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">


                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">Prénom </h6>
                                </label> <input className="mb-4" type="text" name="email" placeholder="Entrer votre Prénom"/></div>

                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">Nom</h6>
                                </label> <input className="mb-4" type="text" name="email" placeholder="Entrer votre Nom"/></div>

                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">Adresse mail</h6>
                                </label> <input className="mb-4" type="text" name="email" placeholder="Entrer votre adresse mail"/></div>

                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">Mot de passe </h6>
                                </label> <input type="password" name="password" placeholder="Entrer votre mot de passe"/></div>

                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline">

                                    </div>
                                </div>
                                <div className="row mb-3 px-3">
                                    <button type="submit" className="btn btn-blue text-center">S'inscrire</button>
                                </div>
                                <div className="row mb-4 px-3"><small className="font-weight-bold">Vous avez déjà un compte ?<a href={"Connexion"} className="text-danger ">Se connecter</a></small></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>










        </div>
    );
};

export default Inscription;