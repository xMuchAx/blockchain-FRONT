import React, { FC, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Historique } from "../components/Historique";
import { ChangeCurrency } from "../components/ChangeCurrency";
import "../styles/Dashboard.scss";
import { Chart } from "../components/Chart";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useAuth } from "../utils/authContext";
import { useNavigate } from "react-router-dom";
import { UrlsApi } from "../utils/urlsApi.enum";
import { callApi } from "../utils/callApi";
import { Transfer } from "../components/Historique/Historique";


const Dashboard: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();


    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const { user, token } = useAuth();
    const[ transfers, setTransfers] = useState<Transfer[]>([])


    useEffect(() => {
        const getTransfers = async ()=> {
            if (user?.public_address) {
                const UrlsApiToGetTransfers = UrlsApi.transactions + `/${user?.public_address}`;

                try {
                    const response = await callApi(UrlsApiToGetTransfers, "GET", null , token);
                    setTransfers(response.transfers)

                } catch (error) {
                    console.error("Error fetching transactions:", error);
                }
            }

        }
    
        getTransfers(); 
    }, [token, transfers, user?.public_address]);

    const userIsLoggedIn = isLoggedIn();
    if (!userIsLoggedIn) {
        console.log("Erreur");
        navigate("Login");
    }

    return (
        <section className="dashboardWrapper">
            <div className="dashboard-left">
                <div className="dashboard-top">
                    <h1>
                        Bonjour, <span className="colored">Bob</span>
                    </h1>
                    <p>Bienvenue sur votre portefeuille</p>
                </div>
                <div className="dashboard-bottom">
                    <Chart />
                </div>
            </div>
            <div className="dashboard-right">
                <ChangeCurrency />
                <div className="hist">
                    <strong>Historique des transactions</strong>
                    <ul>
                            <Historique transfers={transfers}/>
                    </ul>
                    <Button variant="secondary" rounded={false} onClick={handleOpenModal}>
                        Voir toutes les transactions
                    </Button>
                </div>
            </div>
            <div className="eclipse"></div>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="transactions-modal"
                aria-describedby="list-of-transactions"
            >
                <Box className="modalContent">
                    <h2>Historique des transactions</h2>
                    <div className="hist">
                        <ul>
                            <Historique transfers={transfers}/>
                        </ul>
                    </div>
                    <Button variant="secondary" rounded={false} onClick={handleCloseModal}>
                        Fermer
                    </Button>
                </Box>
            </Modal>
        </section>
    );
};

export default Dashboard;