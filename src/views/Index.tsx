import React from "react";
import { Button } from "../components/Button";
import { Chart } from "../components/Chart";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import "../styles/Index.scss";

const Home: React.FC = () => {
    return (
        <div className="homepageWrapper">
            <section className="heroWrapper">
                <div className="heroContent">
                    <div className="heroText">
                        <h1>
                            Le <span>chat</span> qui bâtit ton{" "}
                            <span>trésor</span> une <span>pelle</span> à la fois
                        </h1>
                        <p>
                            CAT², la monnaie numérique qui allie transparence,
                            sécurité et décentralisation, pour bâtir ton trésor
                            en toute confiance.
                        </p>
                        <Button variant="primary" rounded={false}>
                            Commencer l&apos;aventure
                        </Button>
                        <div className="eclipse"></div>
                    </div>
                    <div className="hero-image">
                        <img src={CoinWallet} alt="Coin Wallet"></img>
                    </div>
                </div>
                <div className="heroBottom">
                    {/* <div className="heroBar">
                        <span>Transparence</span>
                        <div className="heroBarDot"></div>
                        <span>Décentralisation</span>
                        <div className="heroBarDot"></div>
                        <span>Sécurité</span>
                    </div> */}
                    <div className="heroAnchor">
                        <span>Découvrir</span>
                        <div className="heroArrow">
                            <div className="heroDotArrow"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="chartWrapper">
                <Chart />
            </section>
            <section className="gridWrapper">
                <div className="gridLeft">
                    <h2>Transparence, Décentralisation et Sécurité</h2>
                    <p>
                        CAT² est une monnaie numérique innovante, conçue pour
                        garantir transparence, décentralisation, et sécurité sur
                        la blockchain Ethereum. Grâce à ERC-1155 d'OpenZeppelin,
                        chaque transaction est claire et accessible, permettant
                        à tous les utilisateurs de suivre en temps réel
                        l’évolution de leurs actifs. La décentralisation de CAT²
                        élimine les intermédiaires, offrant aux utilisateurs un
                        contrôle direct et sécurisé de leurs tokens. Avec
                        Hardhat Ignition pour le déploiement des smart contracts
                        et Ethers.js pour les interactions blockchain, CAT²
                        assure une infrastructure robuste et sûre, protégeant
                        les actifs de ses utilisateurs tout en garantissant une
                        autonomie totale.
                    </p>
                </div>
                <div className="gridRight">
                    <div className="gridTop">
                        <div className="gridTopLeft">
                            <p>
                                La décentralisation de CAT² élimine les
                                intermédiaires, offrant aux utilisateurs un
                                contrôle direct et sécurisé de leurs tokens.
                            </p>
                        </div>
                        <div className="gridTopRight">
                            <p>
                                La décentralisation de CAT² élimine les
                                intermédiaires, offrant aux utilisateurs un
                                contrôle direct et sécurisé de leurs tokens.
                            </p>
                        </div>
                    </div>
                    <div className="gridBottom">
                        <p>
                            La décentralisation de CAT² élimine les
                            intermédiaires, offrant aux utilisateurs un contrôle
                            direct et sécurisé de leurs tokens.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
