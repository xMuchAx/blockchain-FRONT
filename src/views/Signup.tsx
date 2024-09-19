import React, { useState } from "react";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { UrlsApi } from "../utils/urlsApi.enum";
import { callApi } from "../utils/callApi";
import { useAuth } from "../utils/authContext";

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [public_address, setPublicKey] = useState('');
    const [private_key, setPrivateKey] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate(); 

    const ClickAuth = async (event: React.FormEvent) => {
        event.preventDefault(); 

        const data = {
            email: email,
            password: password,
            username: username,
            public_address: public_address,
            private_key: private_key
        };

        try {
            const response = await callApi(UrlsApi.register,'POST',data);
            const token = response.token;
            const email = response.user['email'];
            console.log(token, email)

            if (token) {
                login(token, email);
                navigate('/home');  
            }

        } catch (error) {
            console.error('Erreur lors de l\'inscription :', error);
        }
    }

    return (
        <section className="inscription_page">
            <div className="left">
                <img src={CoinWallet} alt="CoinWallet" />
            </div>

            <div className="right">
                <img src={Logo} alt="Logo" />
                <h1>
                    <span>CAT²</span>, le chat qui bâtit ton trésor
                </h1>
                <div className="form-wrapper">
                    <form onSubmit={ClickAuth}>
                        <div className="formGroup">
                            <label htmlFor="username">Nom d'utilisateur</label>
                            <input
                                type="text"
                                placeholder="Entrez votre nom d'utilisateur"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="key">
                            <div className="formGroup">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder="Entrez votre adresse mail"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="password">Mot de passe</label>
                                <input
                                    type="password"
                                    placeholder="Entrez votre mot de passe"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="key">
                            <div className="formGroup">
                                <label htmlFor="public_address">Clé publique</label>
                                <input
                                    type="text"
                                    placeholder="Entrez votre clé publique"
                                    id="public_address"
                                    name="public_address"
                                    value={public_address}
                                    onChange={(e) => setPublicKey(e.target.value)}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="private_key">Clé privée</label>
                                <input
                                    type="text"
                                    placeholder="Entrez votre clé privée"
                                    id="private_key"
                                    name="private_key"
                                    value={private_key}
                                    onChange={(e) => setPrivateKey(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="conditions">
                        <input
                            type="checkbox"
                            id="checkbox"
                            />
                        <label htmlFor="checkbox">
                            J'accepte les conditions générales d'utilisation...
                        </label>
                        </div>

                        <div className="button">
                            <Button variant="primary" rounded={false}>
                                S'inscrire
                            </Button>
                        </div>
                    </form>

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
