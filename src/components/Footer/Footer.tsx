import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>© Copyright 2024 - M1 Dev ECV Paris All Rights Reserved.</p>
            <ul>
                <li>
                    <Link to="/cgv">CGV</Link>
                </li>
                <li>
                    <Link to="/cgu">CGU</Link>
                </li>
                {/* <li>
                    <Link to="/rgpd">RGPD</Link>
                </li>
                <li>
                    <Link to="/contact">Nous contacter</Link>
                </li> */}
            </ul>
        </footer>
    );
};

export default Footer;
