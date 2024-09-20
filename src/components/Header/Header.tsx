import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button";

import Logo from "../../assets/images/svg/logo/logo-cat__white.svg";

import "./Header.scss";

const Header: React.FC = () => {
    const location = useLocation();

    const token = localStorage.getItem("token");
    const userLoggedIn = !!token;

    const hidingHeader = location.pathname === "/dashboard";

    return (
        <header className="header">
            <Link to="/" className="logoLink">
                <img src={Logo} alt="Logotype CAT²" className="logo" />
            </Link>
            <Link to="/" className="titleLink">
                <span>CAT²</span>
            </Link>
            {!hidingHeader && (
                <div className="headerButton">
                    {userLoggedIn ? (
                        <Link to="/dashboard">
                            <Button variant="primary" rounded={true}>
                                Dashboard
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/signup">
                                <Button variant="secondary" rounded={true}>
                                    Inscription
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="primary" rounded={true}>
                                    Connexion
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
