import React from "react";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

const Login: React.FC = () => {
    return (
        <section className="inscription_page">
            <div className="left">
                <img src={CoinWallet} alt="CoinWallet"></img>
            </div>

            <div className="right">
                <img src={Logo} alt="Logo"></img>
                <h1>
                    Connectez-vous à <span>CAT²</span>
                </h1>
                <div className="form-wrapper">

                    <Form mode="login"/>
                    
                    <div className="link">
                        <span>Pas encore de compte ?</span>
                        <Link to="/login">Créez un compte</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
