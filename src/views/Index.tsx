import React from "react";
import { Chart } from "../components/Chart";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Coin from "../assets/images/png/coin/coin-cat__full.png";
import Coffre from "../assets/images/png/Coffre-fort.png";
import Loupe from "../assets/images/png/Loupe.png";

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
                        <div className="eclipse"></div>
                    </div>
                    <div className="hero-image">
                        <img src={CoinWallet} alt="Coin Wallet"></img>
                    </div>
                </div>
                <div className="heroBottom">
                    <div className="heroAnchor">
                        <span>Découvrir</span>
                        <div className="heroArrow">
                            <div className="heroDotArrow"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gridWrapper">
                <div className="gridLeft">
                    <h2>Transparence, Décentralisation et Sécurité</h2>
                    <div className="gridContent">
                        <p>
                            CAT² est une monnaie numérique innovante, conçue
                            pour garantir transparence, décentralisation, et
                            sécurité sur la blockchain Ethereum. Grâce à
                            ERC-1155 d'OpenZeppelin, chaque transaction est
                            claire et accessible, permettant à tous les
                            utilisateurs de suivre en temps réel l’évolution de
                            leurs actifs.
                        </p>
                        <p>
                            La décentralisation de CAT² élimine les
                            intermédiaires, offrant aux utilisateurs un contrôle
                            direct et sécurisé de leurs tokens.
                        </p>
                        <p>
                            Avec Hardhat Ignition pour le déploiement des smart
                            contracts et Ethers.js pour les interactions
                            blockchain, CAT² assure une infrastructure robuste
                            et sûre, protégeant les actifs de ses utilisateurs
                            tout en garantissant une autonomie totale.
                        </p>
                    </div>
                </div>
                <div className="gridRight">
                    <div className="gridTop">
                        <div className="gridTopLeft">
                            <img src={Coin} alt="Coin" className="coin" />
                        </div>
                        <div className="gridTopRight">
                            <img src={Coffre} alt="Coffre" className="coin" />
                        </div>
                    </div>
                    <div className="gridBottom">
                        <img src={Loupe} alt="Loupe" className="Loupe" />
                    </div>
                </div>
            </section>
            <section className="chartWrapper">
                <h2>Évolution de Cat² par rapport à d'autres devises</h2>
                <Chart />
            </section>
        </div>
    );
};

export default Home;
