import React from "react";
import { TrendUp, TrendDown } from "phosphor-react";

import "./Historique.scss";
import { useAuth } from "../../utils/authContext";
export interface Transfer {
    amount: number;
    from: string;
    operator: string;
    to: string;
    toId: number;
}
interface HistoriqueProps {
    transfers: Transfer[];
}

const Historique: React.FC<HistoriqueProps> = ({ transfers }) => {
    const {user} = useAuth()
    return (
        <ul className="historique">
            {transfers.map((transfer, key) => (
                <li className={transfer.operator === user?.public_address ? "up" : "down"}>
                    <div className="transact">
                        {transfer.operator === user?.public_address ? (
                            <TrendUp size={21} color="#00a478" />
                        ) : (
                            <TrendDown size={21} color="#F64C02" />
                        )}
                        <div className="transact-details">
                            <strong>Transaction #{key}</strong>
                            <p>Reçu par {transfer.to}</p>
                        </div>
                    </div>
                    <div className="transact-infos">
                        <strong>
                            {transfer.amount < 0 ? "-" : "+"} {Math.abs(transfer.amount)}{" "}
                            <span>CAT²</span>
                        </strong>
                        {/* <p>{date}</p> */}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Historique;
