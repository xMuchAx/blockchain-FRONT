import React, { ReactNode } from "react";

interface FrameProps {
    children: ReactNode;
}

// Composant Frame
const Frame: React.FC<FrameProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

const Inscription: React.FC = () => {
    return (
        <section>
            <div>
                <img src="./assets/images/svg/wallet/wallet-cat_full.svg" alt="Logo" />
            </div>

            <div>
                <Frame>
                    <h1>CAT²</h1>
                    <h2>, le chat qui bâtit ton trésor</h2>
                    <form>
                        <div>
                            <label htmlFor="Username">Nom d'utilisateur</label>
                            <input 
                                type="text" 
                                id="Username" 
                                name="Username"
                            />
                        </div>

                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Mot de passe</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>

                        <div>
                            <label htmlFor="clepublique">Clé publique</label>
                            <input 
                                type="text"
                                id="clepublique"
                                name="clepublique"
                            />
                        </div>

                        <div>
                            <label htmlFor="cleprivee">Clé privée</label>
                            <input 
                                type="text"
                                id="cleprivee"
                                name="cleprivee"
                            />
                        </div>

                        <button type="submit">S'inscrire</button>
                    </form>
                </Frame>
            </div>
        </section>
    );
};

export default Inscription;
