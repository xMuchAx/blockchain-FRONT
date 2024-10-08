import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Coin from "../../assets/images/png/coin/coin-cat__full.png";
import {
    ArrowRight,
    ArrowUpRight,
    Gear,
    X,
    MagnifyingGlass,
} from "phosphor-react";
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./ChangeCurrency.scss";
import { UrlsApi } from "../../utils/urlsApi.enum";
import { callApi } from "../../utils/callApi";
import { useAuth } from "../../utils/authContext";

const exchangeRates: { [key: string]: number } = {
    USD: 0.005,
    EUR: 0.0047,
    GBP: 0.0039,
    JPY: 0.72,
};

const currencies = [
    { code: "USD", label: "US Dollars", flagClass: "flag-us" },
    { code: "EUR", label: "Euros", flagClass: "flag-eur" },
    { code: "GBP", label: "British Pounds", flagClass: "flag-gbp" },
    { code: "JPY", label: "Japanese Yen", flagClass: "flag-jpy" },
];

const ChangeCurrency: React.FC = () => {
    const { user, token } = useAuth();

    const [openFirstModal, setOpenFirstModal] = useState(false);
    const [openSecondModal, setOpenSecondModal] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
    const [catAmount, setCatAmount] = useState<number>(320);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const [tokenAmount, setTokenAmount] = useState(0);

    const [nbToken, setNbToken] = useState<number | null>(null);

    const handleOpenFirstModal = () => setOpenFirstModal(true);
    const handleCloseFirstModalWithDelay = () => {
        setTimeout(() => {
            setOpenFirstModal(false);
        }, 300);
    };

    const handleOpenSecondModal = () => setOpenSecondModal(true);
    const handleCloseSecondModal = () => setOpenSecondModal(false);

    useEffect(() => {
        const getTokenFromUser = async () => {
            if (user?.public_address) {
                const UrlsApiToGetToken =
                    UrlsApi.getToken + `/${user?.public_address}`;

                try {
                    const response = await callApi(
                        UrlsApiToGetToken,
                        "GET",
                        null,
                        token
                    );

                    const nbToken = response.nbToken;

                    setNbToken(nbToken);

                    console.log("Number of tokens:", nbToken);
                } catch (error) {
                    console.error("Errors to get token from user:", error);
                }
            }
        };

        getTokenFromUser();
    }, [token, user?.public_address]);

    useEffect(() => {
        const getTokenFromUser = async () => {
            if (user?.public_address) {
                const UrlsApiToGetToken =
                    UrlsApi.getToken + `/${user?.public_address}`;
                console.log(token);

                try {
                    const response = await callApi(
                        UrlsApiToGetToken,
                        "GET",
                        null,
                        token
                    );

                    const nbToken = response.nbToken;
                    setNbToken(nbToken);
                    console.log("Number of tokens:", nbToken);
                } catch (error) {
                    console.error("Errors to get token from user:", error);
                }
            }
        };

        getTokenFromUser();
    }, [token, user.public_address]);

    const incrementToken = () => {
        setTokenAmount((prev) => prev + 1);
    };
    const decrementToken = () => {
        setTokenAmount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setTokenAmount(isNaN(value) ? 0 : value);
    };

    const handleCurrencyChange = (event: any, newValue: any) => {
        if (newValue) {
            setSelectedCurrency(newValue);
            setConvertedAmount(catAmount * exchangeRates[newValue.code]);
        } else {
            setSelectedCurrency(null);
            setConvertedAmount(0);
        }
    };

    const handleCatAmountChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newCatAmount = parseFloat(event.target.value) || 0;
        setCatAmount(newCatAmount);
        if (selectedCurrency) {
            setConvertedAmount(
                newCatAmount * exchangeRates[selectedCurrency.code]
            );
        }
    };

    const flagClass = selectedCurrency
        ? selectedCurrency.flagClass
        : "flag-default";

    return (
        <div className="transfert-wallet">
            <div className="wallet">
                <div className="wallet-details">
                    <strong>Portefeuille</strong>
                    <p>MAJ à l’instant</p>
                </div>
                <div className="wallet-amount">
                    <span>{nbToken !== null ? nbToken : "Loading..."}</span>
                    <img src={Coin} alt="Pièce CAT²" className="piece" />
                </div>
            </div>
            <hr />
            <div className="transfert">
                <div className="transfert-input">
                    <Autocomplete
                        disablePortal
                        options={currencies}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={handleCurrencyChange}
                        sx={{ width: 300 }}
                        renderOption={(props, option) => {
                            const { key, ...optionProps } = props;
                            return (
                                <Box
                                    key={key}
                                    component="li"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        "& .transfert-flag": { mr: 2 },
                                    }}
                                    {...optionProps}
                                >
                                    <div
                                        className={`transfert-flag ${option.flagClass}`}
                                    ></div>
                                    {option.label}
                                </Box>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Choisissez une devise"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <div
                                            className={`transfert-flag ${flagClass}`}
                                            style={{ marginRight: 10 }}
                                        ></div>
                                    ),
                                }}
                            />
                        )}
                    />
                </div>
                <div className="transfert-output">
                    <span className="devise">
                        {convertedAmount.toFixed(2)}{" "}
                        {selectedCurrency ? selectedCurrency.code : ""}
                    </span>
                    <div className="transfert-arrow">
                        <ArrowRight size={16} weight="bold" />
                    </div>
                    <div className="devise-cat">
                        <input
                            type="number"
                            value={catAmount}
                            onChange={handleCatAmountChange}
                            className="cat-amount-input"
                        />
                        <span>CAT²</span>
                    </div>
                </div>
            </div>

            <div className="send-buttons">
                <Button
                    variant="primary"
                    rounded={false}
                    onClick={handleOpenFirstModal}
                >
                    <ArrowUpRight size={16} weight="bold" />
                    Envoyer un token
                </Button>
                <Modal
                    keepMounted
                    open={openFirstModal}
                    onClose={handleCloseFirstModalWithDelay}
                    aria-labelledby="first-modal-title"
                    aria-describedby="first-modal-description"
                >
                    <Box className="Modal">
                        <p>Gérez vos Tokens</p>
                        <div className="inputToken">
                            <div className="Modal-head">
                                <img
                                    src={Coin}
                                    alt="Pièce CAT²"
                                    className="piece"
                                />
                                <p>CAT²</p>
                            </div>
                            <div className="ModalNumber">
                                <span onClick={decrementToken}>-</span>{" "}
                                <input
                                    type="number"
                                    value={tokenAmount}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                />
                                <span onClick={incrementToken}>+</span>{" "}
                            </div>
                        </div>
                        <div className="PopinSend">
                            <Button variant="primary" rounded={false}>
                                Envoyer
                                <ArrowUpRight size={16} weight="bold" />
                            </Button>
                        </div>
                        <span
                            className="close"
                            onClick={handleCloseFirstModalWithDelay}
                        >
                            <X size={16} color="#FCFEFF" weight="bold" />
                        </span>
                    </Box>
                </Modal>

                <Button
                    variant="secondary"
                    rounded={false}
                    onClick={handleOpenSecondModal}
                >
                    <Gear size={16} weight="bold" />
                    Gérer les tokens
                </Button>

                <Modal
                    keepMounted
                    open={openSecondModal}
                    onClose={handleCloseSecondModal}
                    aria-labelledby="second-modal-title"
                    aria-describedby="second-modal-description"
                >
                    <Box className="Modal">
                        <div className="Search">
                            <span>
                                <MagnifyingGlass
                                    size={16}
                                    color="#FCFEFF"
                                    weight="bold"
                                />
                            </span>
                            <input
                                type="search"
                                placeholder="Recherche un contact..."
                            />
                        </div>
                        <div className="inputToken">
                            <div className="Modal-head">
                                <img
                                    src={Coin}
                                    alt="Pièce CAT²"
                                    className="piece"
                                />
                                <p>CAT²</p>
                            </div>
                            <div className="ModalNumber">
                                <span onClick={decrementToken}>-</span>{" "}
                                <input
                                    type="number"
                                    value={tokenAmount}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                />
                                <span onClick={incrementToken}>+</span>{" "}
                            </div>
                        </div>
                        <div className="PopinSend">
                            <Button variant="primary" rounded={false}>
                                <ArrowUpRight size={16} weight="bold" />
                                Ajouter
                            </Button>
                            <Button
                                variant="secondary"
                                rounded={false}
                                onClick={() => setTokenAmount(0)}
                            >
                                <X size={16} weight="bold" />
                                Supprimer
                            </Button>
                        </div>
                        <span
                            className="close"
                            onClick={handleCloseSecondModal}
                        >
                            <X size={16} color="#FCFEFF" weight="bold" />
                        </span>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default ChangeCurrency;
