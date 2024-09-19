import React, { FC } from "react";
import { Button } from "../components/Button";
import { Historique } from "../components/Historique";
import { ChangeCurrency } from "../components/ChangeCurrency";

import "../styles/Dashboard.scss";
import { Chart } from "../components/Chart";

const Dashboard: FC = () => {
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
                        <Historique
                            direction="up"
                            id="324"
                            recipient="Alice"
                            amount={32}
                            date="17/09/2024"
                        />
                        <Historique
                            direction="down"
                            id="324"
                            recipient="Joe"
                            amount={-332}
                            date="17/09/2028"
                        />
                    </ul>
                    <Button variant="secondary" rounded={false}>
                        Voir toutes les transactions
                    </Button>
                </div>
            </div>
            <div className="eclipse"></div>
        </section>
    );
};

export default Dashboard;
