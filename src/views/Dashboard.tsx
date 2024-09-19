import React from 'react';
import styles from './Dashboard.module.css';
// import Coin from '../assets/images/png/coin/coin-cat__full.png';

const Dashboard: React.FC = () => {
    return (
        <section className={styles.dashboard}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <h1>
                        Bonjour, <span className={styles.colored}>Bob</span>
                    </h1>
                    <p>Bienvenue sur votre portefeuille</p>
                </div>
                <div className={styles.bottom}>
                    <p>Graphe</p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wallet}>
                    <div>
                        <strong>Portefeuille</strong>
                        <p>MAJ à l’instant</p>
                    </div>
                    <div>
                        <span>10</span>
                        {/* <img src={Coin} alt="Pièce CAT²" className={styles.coinImage} /> */}
                    </div>
                </div>
                <div className={styles.transfert}></div>
            </div>
        </section>
    );
};

export default Dashboard;
