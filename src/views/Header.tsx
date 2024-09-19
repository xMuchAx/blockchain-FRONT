import React from 'react';
import styles from './Header.module.css';
import Button from '../views/Button';
// import {Logo} from "../assets/images/svg/logo/logo-cat__white.svg"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logoLink}>
                {/* <img src={Logo} alt="Logotype CAT²" className={styles.logo} /> */}
            </a>
            <a href="/" className={styles.titleLink}>
                <span>CAT²</span>
            </a>
            <div className={styles.headerButton}>
                <Button variant="secondary" rounded={true}>
                    Inscription
                </Button>
                <Button variant="primary" rounded={true}>
                    Connexion
                </Button>
            </div>
        </header>
    );
};

export default Header;
