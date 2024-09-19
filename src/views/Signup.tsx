import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

type FormValues = {
  username: string;
  email: string;
  password: string;
  clepublique: string;
  cleprivee: string;
};

const Signup: React.FC = () => {
  const {
    register, // Pour enregistrer les inputs
    handleSubmit, // Pour gérer la soumission
    formState: { errors }, // Pour gérer les erreurs de validation
  } = useForm<FormValues>();

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data); // Traitement des données du formulaire ici
  };

  return (
    <section className="inscription_page">
      <div className="left">
        <img src={CoinWallet} alt="CoinWallet" />
      </div>

      <div className="right">
        <img src={Logo} alt="Logo" />
        <h1>
          <span>CAT²</span>, le chat qui batit ton trésor
        </h1>
        <div className="form-wrapper">
          {/* Formulaire avec gestion des données via react-hook-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formGroup">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                placeholder="Entrez votre nom d'utilisateur"
                id="username"
                {...register("username", { required: "Nom d'utilisateur requis" })}
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div className="key">
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
                  {...register("password", { required: "Mot de passe requis" })}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
            </div>

            <div className="key">
              <div className="formGroup">
                <label htmlFor="clepublique">Clé publique</label>
                <input
                  type="text"
                  placeholder="Entrez votre clé publique"
                  id="clepublique"
                  {...register("clepublique", { required: "Clé publique requise" })}
                />
                {errors.clepublique && <span>{errors.clepublique.message}</span>}
              </div>

              <div className="formGroup">
                <label htmlFor="cleprivee">Clé privée</label>
                <input
                  type="text"
                  placeholder="Entrez votre clé privée"
                  id="cleprivee"
                  {...register("cleprivee", { required: "Clé privée requise" })}
                />
                {errors.cleprivee && <span>{errors.cleprivee.message}</span>}
              </div>
            </div>

            <div className="conditions">
              <p>J'accepte les conditions générales d'utilisations...</p>
            </div>

            <div className="button">
              <Button variant="primary" rounded={false}>
                S'inscrire
              </Button>
            </div>
          </form>

          <div className="link">
            <span>Déjà un compte ?</span>
            <Link to="/login">Connectez-vous</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
