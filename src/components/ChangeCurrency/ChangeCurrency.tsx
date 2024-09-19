import React from "react";
import { Button } from "../Button";
import Coin from "../../assets/images/png/coin/coin-cat__full.png";
import { ArrowRight } from "phosphor-react";

import "./ChangeCurrency.scss";

const ChangeCurrency: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <strong>Portefeuille</strong>
                    <p>MAJ à l’instant</p>
                </div>
                <div>
                    <span>10</span>
                    <img src={Coin} alt="Pièce CAT²" />
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div></div>
                    <select>
                        <option>US dollars</option>
                        <option>Euros</option>
                    </select>
                </div>
                <div>
                    <span>320$</span>
                    <ArrowRight size={16} />
                    <span>
                        320 <img src={Coin} alt="Pièce CAT²" />
                    </span>
                </div>
            </div>
            <div>
                <Button variant="primary" rounded={false}>
                    Envoyer un token
                </Button>
                <Button variant="secondary" rounded={false}>
                    Gérer les tokens
                </Button>
            </div>
        </div>
    );
};

export default ChangeCurrency;
