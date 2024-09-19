import React from "react";
import "./Button.scss";

type ButtonProps = {
    variant: "primary" | "secondary";
    rounded: boolean;
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
    variant,
    rounded,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${
                variant === "primary" ? "primary" : "secondary"
            } ${rounded ? "btnRound" : "btnFull"}`}
        >
            {children}
        </button>
    );
};

export default Button;
