import "../assets/styles/global.css";
import styles from "../styles/Index.module.css";
import Button from "../views/Button";
// import CoinWallet from "./assets/images/svg/wallet/wallet-cat__full.svg";
import Chart from "../views/Chart";

function Home() {
    return (
        <div className={styles.homepageWrapper}>
            <section className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>
                            Le <span>chat</span> qui bâtit ton{" "}
                            <span>trésor</span> une <span>pelle</span> à la fois
                        </h1>
                        <p>
                            CAT², la monnaie numérique qui allie transparence,
                            sécurité et décentralisation, pour bâtir ton trésor
                            en toute confiance.
                        </p>
                        <Button variant="primary" rounded={false}>
                            Commencer l&apos;aventure
                        </Button>
                        <div className="eclipse"></div>
                    </div>
                    <div className="hero-image">
                        {/* <Image src={CoinWallet} alt="Coin Wallet"></Image> */}
                    </div>
                </div>
                <div className={styles.heroBottom}>
                    {/* <div className={styles.heroBar}>
                        <span>Transparence</span>
                        <div className={styles.heroBarDot}></div>
                        <span>Décentralisation</span>
                        <div className={styles.heroBarDot}></div>
                        <span>Sécurité</span>
                    </div> */}
                    <div className={styles.heroAnchor}>
                        <span>Découvrir</span>
                        <div className={styles.heroArrow}>
                            <div className={styles.heroDotArrow}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.chartWrapper}>
                <Chart />
            </section>
            <section className={styles.gridWrapper}>
                <div className={styles.gridLeft}></div>
                <div className={styles.gridRight}>
                    <div className={styles.gridTop}>
                        <div className={styles.gridTopLeft}></div>
                        <div className={styles.gridTopRight}></div>
                    </div>
                    <div className={styles.gridBottom}></div>
                </div>
            </section>
        </div>
    );
}

export default Home
