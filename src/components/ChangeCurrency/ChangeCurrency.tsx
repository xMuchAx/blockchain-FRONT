import React from "react";
import { Button } from "../Button";
import Coin from "../../assets/images/png/coin/coin-cat__full.png";
import { ArrowRight, ArrowUpRight, Gear } from "phosphor-react";
import { Autocomplete, TextField } from "@mui/material";
import "./ChangeCurrency.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const currencies = [
    { code: "USD", label: "US Dollars" },
    { code: "EUR", label: "Euros" },
    { code: "GBP", label: "British Pounds" },
    { code: "JPY", label: "Japanese Yen" },
];

const ChangeCurrency: React.FC = () => {
    const [openFirstModal, setOpenFirstModal] = React.useState(false);
    const [openSecondModal, setOpenSecondModal] = React.useState(false);

    const handleOpenFirstModal = () => setOpenFirstModal(true);
    const handleCloseFirstModal = () => setOpenFirstModal(false);

    const handleOpenSecondModal = () => setOpenSecondModal(true);
    const handleCloseSecondModal = () => setOpenSecondModal(false);

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
                            <img
                                src={Coin}
                                alt="Pièce CAT²"
                                className="piece"
                            />
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
