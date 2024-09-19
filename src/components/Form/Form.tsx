import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import "../styles/FormComponent.scss";
import { Button } from "../Button";

type FormValues = {
    username?: string;
    email: string;
    password: string;
    clepublique?: string;
    cleprivee?: string;
};

type FormComponentProps = {
    formType: "signup" | "login";
    onSubmit: SubmitHandler<FormValues>;
};

const Form: React.FC<FormComponentProps> = ({ formType, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formType === "signup" && (
                <div className="formGroup">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                        type="text"
                        placeholder="Entrez votre nom d'utilisateur"
                        id="username"
                        {...register("username", {
                            required: "Nom d'utilisateur requis",
                        })}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
            )}

            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Entrez votre adresse mail"
                    id="email"
                    {...register("email", {
                        required: "Adresse mail requise",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Adresse mail invalide",
                        },
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="formGroup">
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    id="password"
                    {...register("password", {
                        required: "Mot de passe requis",
                    })}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            {formType === "signup" && (
                <>
                    <div className="formGroup">
                        <label htmlFor="clepublique">Clé publique</label>
                        <input
                            type="text"
                            placeholder="Entrez votre clé publique"
                            id="clepublique"
                            {...register("clepublique", {
                                required: "Clé publique requise",
                            })}
                        />
                        {errors.clepublique && (
                            <span>{errors.clepublique.message}</span>
                        )}
                    </div>

                    <div className="formGroup">
                        <label htmlFor="cleprivee">Clé privée</label>
                        <input
                            type="text"
                            placeholder="Entrez votre clé privée"
                            id="cleprivee"
                            {...register("cleprivee", {
                                required: "Clé privée requise",
                            })}
                        />
                        {errors.cleprivee && (
                            <span>{errors.cleprivee.message}</span>
                        )}
                    </div>
                </>
            )}

            <div className="button">
                <Button variant="primary" rounded={false}>
                    {formType === "signup" ? "S'inscrire" : "Se connecter"}
                </Button>
            </div>
        </form>
    );
};

export default Form;
