import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Coin from "../../assets/images/png/coin/coin-cat__full.png";
import { ArrowRight, ArrowUpRight, Gear } from "phosphor-react";
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./ChangeCurrency.scss";
import { UrlsApi } from "../../utils/urlsApi.enum";
import { callApi } from "../../utils/callApi";
import { useAuth } from "../../utils/authContext";
import { useNavigate } from "react-router-dom";

const currencies = [
    { code: "USD", label: "US Dollars", flagClass: "flag-us" },
    { code: "EUR", label: "Euros", flagClass: "flag-eur" },
    { code: "GBP", label: "British Pounds", flagClass: "flag-gbp" },
    { code: "JPY", label: "Japanese Yen", flagClass: "flag-jpy" },
];

const ChangeCurrency: React.FC = () => {
    const { user, token, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    
    // State for modals
    const [openFirstModal, setOpenFirstModal] = useState(false);
    const [openSecondModal, setOpenSecondModal] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    
    // Token state
    const [nbToken, setNbToken] = useState<number | null>(null); // Type as number or null

    const handleOpenFirstModal = () => setOpenFirstModal(true);
    const handleCloseFirstModal = () => setOpenFirstModal(false);

    const handleOpenSecondModal = () => setOpenSecondModal(true);
    const handleCloseSecondModal = () => setOpenSecondModal(false);

    const userIsLoggedIn = isLoggedIn();
    if (!userIsLoggedIn) {
        console.log("Erreur");
        navigate("Login");
    }

    useEffect(() => {
        const getTokenFromUser = async () => {

            if (user?.public_address) {
                const UrlsApiToGetToken = UrlsApi.getToken + `/${user?.public_address}`;
                console.log(token);

                try {
                    const response = await callApi(UrlsApiToGetToken, "GET", null,token);

                    // Assuming the response has a 'token' field, adjust based on the actual API response
                    const nbToken = response.nbToken; 
                    setNbToken(nbToken); // Fallback to 0 if no token is available
                    console.log("Number of tokens:", nbToken);
                } catch (error) {
                    console.error("Errors to get token from user:", error);
                }
            }
        };

        getTokenFromUser();
    },[token, user.public_address]); 

    return (
        <div className="transfert-wallet">
            <div className="wallet">
                <div className="wallet-details">
                    <strong>Portefeuille</strong>
                    <p>MAJ à l’instant</p>
                </div>
                <div className="wallet-amount">
                    <span>{nbToken !== null ? nbToken : "Loading..."}</span> {/* Fallback for null */}
                    <img src={Coin} alt="Pièce CAT²" className="piece" />
                </div>
            </div>
            <hr />
            <div className="transfert">
                <div className="transfert-input">
                    <div className={`transfert-flag ${selectedCurrency.flagClass}`}></div>
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
                    <span className="devise">320 $</span>
                    <div className="transfert-arrow">
                        <ArrowRight size={16} weight="bold" />
                    </div>
                    <span className="deviseCat">
                        320 <img src={Coin} alt="Pièce CAT²" className="piece" />
                    </span>
                </div>
            </div>

            <div className="send-buttons">
                <Button
                    variant="primary"
                    rounded={false}
                    onClick={handleOpenFirstModal}
                >
                    <ArrowUpRight size={16} />
                    Envoyer un token
                </Button>

                <Modal
                    keepMounted
                    open={openFirstModal}
                    onClose={handleCloseFirstModal}
                    aria-labelledby="first-modal-title"
                    aria-describedby="first-modal-description"
                >
                    <Box className="Modal">
                        <p>Gérez vos Tokens</p>
                        <div className="inputToken">
                            <img src={Coin} alt="Pièce CAT²" className="piece" />
                            <p>CAT²</p>
                        </div>
                        <input type="number" />
                        <Button variant="primary" rounded={false}>
                            Ajouter
                        </Button>
                        <Button variant="secondary" rounded={false}>
                            Supprimer
                        </Button>
                    </Box>
                </Modal>

                <Button
                    variant="secondary"
                    rounded={false}
                    onClick={handleOpenSecondModal}
                >
                    <Gear size={16} />
                    Gérer les tokens
                </Button>

                <Modal
                    keepMounted
                    open={openSecondModal}
                    onClose={handleCloseSecondModal}
                    aria-labelledby="second-modal-title"
                    aria-describedby="second-modal-description"
                >
                    <Box className="Modal"></Box>
                </Modal>
            </div>
        </div>
    );
};

export default ChangeCurrency;
