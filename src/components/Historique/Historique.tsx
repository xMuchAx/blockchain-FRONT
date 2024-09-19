import React, { FC } from "react";
import { TrendUp, TrendDown } from "phosphor-react";

import "./Historique.scss";

interface HistoriqueProps {
    direction: "up" | "down";
    id: string;
    recipient: string;
    amount: number;
    date: string;
}

const Historique: FC<HistoriqueProps> = ({
    direction,
    id,
    recipient,
    amount,
    date,
}) => {
    return (
        <li className={direction === "up" ? "up" : "down"}>
            <div className="transact">
                {direction === "up" ? (
                    <TrendUp size={21} color="#00a478" />
                ) : (
                    <TrendDown size={21} color="#F64C02" />
                )}
                <div>
                    <strong>Transaction #{id}</strong>
                    <p>Reçu par {recipient}</p>
                </div>
            </div>
            <div className="transact-infos">
                <strong>
                    {amount < 0 ? "-" : "+"} {Math.abs(amount)}{" "}
                    <span>CAT²</span>
                </strong>
                <p>{date}</p>
            </div>
        </li>
    );
};

export default Historique;
