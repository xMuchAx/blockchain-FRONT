import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
    return (
        <section className="inscription_page">
            <div className="left">
                <img src={CoinWallet} alt="CoinWallet"></img>
            </div>

            <div className="right">
                <img src={Logo} alt="Logo"></img>
                <h1>
                    <span>CAT²</span>, le chat qui batit ton trésor
                </h1>
                <div>
                    <form>
                        <div className="formGroup">
                            <label htmlFor="Username">Nom d'utilisateur</label>
                            <input
                                type="text"
                                placeholder="Entrez votre nom d'utilisateur"
                                id="Username"
                                name="Username"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Entrez votre adresse mail"
                                id="email"
                                name="email"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                placeholder="Entrez votre mot de passe"
                                id="password"
                                name="password"
                            />
                        </div>
                        <div className="key">
                            <div className="formGroup">
                                <label htmlFor="clepublique">
                                    Clé publique
                                </label>
                                <input
                                    type="text"
                                    placeholder="Entrez votre clé publique"
                                    id="clepublique"
                                    name="clepublique"
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="cleprivee">Clé privée</label>
                                <input
                                    type="text"
                                    placeholder="Entrez votre clé privée"
                                    id="cleprivee"
                                    name="cleprivee"
                                />
                            </div>
                        </div>
                        <div className="conditions">
                            <p>
                                {" "}
                                J'accepte les conditions générales
                                d'utilisations...
                            </p>
                        </div>

                        <div className="button">
                            <Button variant="primary" rounded={false}>
                                S'inscrire
                            </Button>
                        </div>
                    </form>
                    <div className="link">
                        <span>Déjà un compte?</span>
                        <Link to="/login">Connectez-vous</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
