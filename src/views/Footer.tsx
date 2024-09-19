import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>© Copyright 2024 - M1 Dev ECV Paris All Rights Reserved.</p>
            <ul>
                <li><a href="/cgv">CGV</a></li>
                <li><a href="/cgu">CGU</a></li>
                <li><a href="/rgpd">RGPD</a></li>
                <li><a href="/contact">Nous contacter</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
