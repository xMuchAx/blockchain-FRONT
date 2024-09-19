import React from "react";
import { Button } from "../Button";
import Coin from "../../assets/images/png/coin/coin-cat__full.png";
import { ArrowRight, ArrowUpRight, Gear } from "phosphor-react";
import { Autocomplete, TextField } from "@mui/material";
import "./ChangeCurrency.scss";

const currencies = [
    { code: "USD", label: "US Dollars" },
    { code: "EUR", label: "Euros" },
    { code: "GBP", label: "British Pounds" },
    { code: "JPY", label: "Japanese Yen" },
];

const ChangeCurrency: React.FC = () => {
    return (
        <div className="transfertWallet">
            <div className="wallet">
                <div>
                    <strong>Portefeuille</strong>
                    <p>MAJ à l’instant</p>
                </div>
                <div>
                    <span>10</span>
                    <img src={Coin} alt="Pièce CAT²" className="piece" />
                </div>
            </div>
            <hr />
            <div className="transfert">
                <div>
                    <div className="flagUs"></div>
                    <Autocomplete
                        disablePortal
                        options={currencies}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Devise" />
                        )}
                    />
                </div>
                <div>
                    <span className="devise">320$</span>
                    <ArrowRight size={16} />
                    <span className="deviseCat">
                        320{" "}
                        <img src={Coin} alt="Pièce CAT²" className="piece" />
                    </span>
                </div>
            </div>
            <div className="send">
                <Button variant="primary" rounded={false}>
                    <ArrowUpRight size={16} />
                    Envoyer un token
                </Button>
                <Button variant="secondary" rounded={false}>
                    <Gear size={16} />
                    Gérer les tokens
                </Button>
            </div>
        </div>
    );
};

export default ChangeCurrency;
