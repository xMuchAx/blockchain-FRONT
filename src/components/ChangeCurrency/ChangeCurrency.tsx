import React, { useState } from "react";
import { Button } from "../Button";
import Coin from "../../assets/images/png/coin/coin-cat__full.png";
import { ArrowRight, ArrowUpRight, Gear } from "phosphor-react";
import { Autocomplete, TextField } from "@mui/material";
import "./ChangeCurrency.scss";

const currencies = [
    { code: "USD", label: "US Dollars", flagClass: "flag-us" },
    { code: "EUR", label: "Euros", flagClass: "flag-eur" },
    { code: "GBP", label: "British Pounds", flagClass: "flag-gbp" },
    { code: "JPY", label: "Japanese Yen", flagClass: "flag-jpy" },
];

const ChangeCurrency: React.FC = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    return (
        <div className="transfert-wallet">
            <div className="wallet">
                <div className="wallet-details">
                    <strong>Portefeuille</strong>
                    <p>MAJ à l’instant</p>
                </div>
                <div className="wallet-amount">
                    <span>10</span>
                    <img src={Coin} alt="Pièce CAT²" className="piece" />
                </div>
            </div>
            <hr />
            <div className="transfert">
                <div className="transfert-input">
                    <div
                        className={`transfert-flag ${selectedCurrency.flagClass}`}
                    ></div>
                    <Autocomplete
                        disablePortal
                        options={currencies}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        onChange={(event, newValue) => {
                            if (newValue) setSelectedCurrency(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Devise" />
                        )}
                    />
                </div>
                <div className="transfert-output">
                    <span className="devise">320$</span>
                    <ArrowRight size={16} />
                    <span className="deviseCat">
                        320{" "}
                        <img src={Coin} alt="Pièce CAT²" className="piece" />
                    </span>
                </div>
            </div>
            <div className="send-buttons">
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
