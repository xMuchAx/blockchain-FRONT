import React from "react";
import { SubmitHandler } from "react-hook-form";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

type FormValues = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const handleLogin: SubmitHandler<FormValues> = (data) => {
        console.log("Données de connexion", data);
    };
    return (
        <section className="inscription_page login">
            <div className="left">
                <img src={CoinWallet} alt="CoinWallet"></img>
                <div className="eclipse"></div>
            </div>

            <div className="right">
                <img src={Logo} alt="Logo"></img>
                <h1>
                    Connectez-vous à <span>CAT²</span>
                </h1>
                <div className="form-wrapper">
                    <Form formType="login" onSubmit={handleLogin} />
                    <div className="link">
                        <span>Pas encore de compte ?</span>
                        <Link to="/signup">Créez un compte</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
