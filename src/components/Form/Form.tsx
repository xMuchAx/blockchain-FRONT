import React, { useState } from "react";
import { Button } from "../Button";
import { callApi } from "../../utils/callApi";
import { UrlsApi } from "../../utils/urlsApi.enum";
import { useAuth } from "../../utils/authContext";
import { useNavigate } from "react-router-dom";

interface FormProps {
    mode: "login" | "register";
}

const Form: React.FC<FormProps> = ({ mode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [public_address, setPublicAddress] = useState("");
    const [private_key, setPrivateKey] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const ClickAuth = async (event: React.FormEvent) => {
        event.preventDefault();

        const data =
            mode === "register"
                ? {
                      email: email,
                      password: password,
                      username: username,
                      public_address: public_address,
                      private_key: private_key,
                  }
                : {
                      email: email,
                      password: password,
                  };

        try {
            const response =
                mode === "register"
                    ? await callApi(UrlsApi.register, "POST", data)
                    : await callApi(UrlsApi.login, "POST", data);
            const token = response.token;
            console.log(response);

            const email = response.user["email"];

            if (token) {
                login(token, email);
                navigate("/dashboard");
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
        }
    };

    return (
        <form onSubmit={ClickAuth}>
            {mode === "register" && (
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
            )}
            {mode === "register" ? (
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
            ) : (
                <>
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
                </>
            )}

            {mode === "register" && (
                <div className="key">
                    <div className="formGroup">
                        <label htmlFor="public_address">Clé publique</label>
                        <input
                            type="text"
                            placeholder="Entrez votre clé publique"
                            id="public_address"
                            name="public_address"
                            value={public_address}
                            onChange={(e) => setPublicAddress(e.target.value)}
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
            )}
            <div className="conditions">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                    J'accepte les conditions générales d'utilisation...
                </label>
            </div>
            <div className="button">
                <Button variant="primary" rounded={false}>
                    {mode === "register" ? "S'inscrire" : "Se connecter"}
                </Button>
            </div>
        </form>
    );
};

export default Form;
