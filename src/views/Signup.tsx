import React from "react";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Link } from "react-router-dom";

import { Form } from "../components/Form";

const Signup: React.FC = () => {
    

    return (
        <section className="inscription_page">
            <div className="left">
                <img src={CoinWallet} alt="CoinWallet" />
                <div className="eclipse"></div>
            </div>

            <div className="right">
                <img src={Logo} alt="Logo" />
                <h1>
                    <span>CAT²</span>, le chat qui bâtit ton trésor
                </h1>
                <div className="form-wrapper">
                    <Form mode="register"/>

                    <div className="link">
                        <span>Déjà un compte ?</span>
                        <Link to="/login">Connectez-vous</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
