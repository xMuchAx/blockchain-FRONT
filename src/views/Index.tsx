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
                <div className="gridLeft"></div>
                <div className="gridRight">
                    <div className="gridTop">
                        <div className="gridTopLeft"></div>
                        <div className="gridTopRight"></div>
                    </div>
                    <div className="gridBottom"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
