import React, { FC, useState } from "react";
import { Button } from "../components/Button";
import { Historique } from "../components/Historique";
import { ChangeCurrency } from "../components/ChangeCurrency";
import "../styles/Dashboard.scss";
import { Chart } from "../components/Chart";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Dashboard: FC = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const transactions: {
        direction: "up" | "down";
        id: string;
        recipient: string;
        amount: number;
        date: string;
    }[] = [
        {
            direction: "up",
            id: "324",
            recipient: "Alice",
            amount: 32,
            date: "17/09/2024",
        },
        {
            direction: "down",
            id: "325",
            recipient: "Bob",
            amount: -42,
            date: "18/09/2024",
        },
        {
            direction: "up",
            id: "326",
            recipient: "Charlie",
            amount: 62,
            date: "19/09/2024",
        },
        {
            direction: "down",
            id: "325",
            recipient: "Bob",
            amount: -42,
            date: "18/09/2024",
        },
        {
            direction: "up",
            id: "326",
            recipient: "Charlie",
            amount: 62,
            date: "19/09/2024",
        },
        {
            direction: "down",
            id: "325",
            recipient: "Bob",
            amount: -42,
            date: "18/09/2024",
        },
        {
            direction: "up",
            id: "326",
            recipient: "Charlie",
            amount: 62,
            date: "19/09/2024",
        },
        {
            direction: "down",
            id: "325",
            recipient: "Bob",
            amount: -42,
            date: "18/09/2024",
        },
        {
            direction: "up",
            id: "326",
            recipient: "Charlie",
            amount: 62,
            date: "19/09/2024",
        },
        {
            direction: "down",
            id: "325",
            recipient: "Bob",
            amount: -42,
            date: "18/09/2024",
        },
        {
            direction: "up",
            id: "326",
            recipient: "Charlie",
            amount: 62,
            date: "19/09/2024",
        },
        {
            direction: "down",
            id: "325",
            recipient: "Bob",
            amount: -42,
            date: "18/09/2024",
        },
        {
            direction: "up",
            id: "326",
            recipient: "Charlie",
            amount: 62,
            date: "19/09/2024",
        },
    ];

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
        console.log("User is logged in:", user);
    } else {
        console.log("No user logged in");
    }

    return (
        <section className="dashboardWrapper">
            <div className="dashboard-left">
                <div className="dashboard-top">
                    {user ? (
                        <h1>
                            Bonjour,{" "}
                            <span className="colored">{user.username}</span>
                        </h1>
                    ) : (
                        <h1>Vous n'êtes pas connecté !</h1>
                    )}
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
                        {transactions.slice(0, 2).map((transaction, index) => (
                            <Historique key={index} {...transaction} />
                        ))}
                    </ul>
                    <Button
                        variant="secondary"
                        rounded={false}
                        onClick={handleOpenModal}
                    >
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
                            {transactions.map((transaction, index) => (
                                <Historique key={index} {...transaction} />
                            ))}
                        </ul>
                    </div>
                    <Button
                        variant="secondary"
                        rounded={false}
                        onClick={handleCloseModal}
                    >
                        Fermer
                    </Button>
                </Box>
            </Modal>
        </section>
    );
};

export default Dashboard;
