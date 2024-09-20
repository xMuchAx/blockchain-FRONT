import React from "react";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

const Cgu: React.FC = () => {
    return (
        <section className="cgu">
            <h1>Conditions Générales d'Utilisation (CGU) - CAT2</h1>

            <h2>1. Objet</h2>
            <p>
                Les présentes Conditions Générales d’Utilisation (CGU) ont pour
                objet de définir les modalités d’accès et d’utilisation de
                l’application CAT2, qui permet d’envoyer et de recevoir de la
                monnaie électronique via la blockchain Ethereum. Elles
                s’appliquent à tous les utilisateurs de l’application.
            </p>

            <h2>2. Identification de l'éditeur de l’application</h2>
            <p>
                L'application CAT2 est éditée par la promotion M1 DEV, de l'ECV
                (1 Rue du Dahomey, 75011 Paris).
            </p>

            <h2>3. Accès à l'application</h2>
            <p>
                L’accès à l’application CAT2 est réservé aux utilisateurs
                majeurs disposant de la pleine capacité juridique. L'utilisation
                de l'application implique l'acceptation pleine et entière des
                présentes CGU. Si l'utilisateur n'accepte pas les CGU, il est
                prié de ne pas utiliser l'application.
            </p>

            <h2>3.1. Création de compte</h2>
            <p>
                Pour utiliser les services de CAT2, l'utilisateur doit créer un
                compte personnel en fournissant des informations exactes et
                complètes. L’utilisateur s’engage à garder confidentiels ses
                identifiants et à ne pas les divulguer à des tiers.
            </p>

            <h2>4. Fonctionnalités de l'application</h2>
            <p>CAT2 permet aux utilisateurs de :</p>
            <ul>
                <li>
                    Envoyer et recevoir de la monnaie électronique basée sur la
                    blockchain Ethereum.
                </li>
                <li>
                    Consulter leur solde de cryptomonnaies et visualiser
                    l'historique de leurs transactions.
                </li>
                <li>
                    Gérer leurs portefeuilles numériques de manière sécurisée.
                </li>
            </ul>

            <h2>5. Obligations des utilisateurs</h2>
            <p>
                Les utilisateurs s’engagent à utiliser l’application dans le
                respect des lois en vigueur et des présentes CGU. Il leur est
                interdit d’utiliser CAT2 à des fins illicites, notamment pour le
                blanchiment d'argent, le financement du terrorisme, ou toute
                activité frauduleuse.
            </p>

            <h2>6. Sécurité et responsabilités</h2>
            <p>
                L'Éditeur met en œuvre des mesures de sécurité pour protéger les
                comptes et les transactions des utilisateurs. Toutefois, il
                incombe à chaque utilisateur de veiller à la sécurité de ses
                identifiants et mots de passe. En cas d’accès non autorisé à son
                compte, l’utilisateur doit immédiatement informer CAT2.
            </p>
            <p>
                CAT2 décline toute responsabilité en cas de perte de fonds due à
                une mauvaise gestion des identifiants par l'utilisateur ou à un
                piratage extérieur.
            </p>

            <h2>7. Risques liés aux cryptomonnaies</h2>
            <p>
                L'utilisateur reconnaît et accepte que l’utilisation des
                cryptomonnaies comporte des risques élevés, notamment une forte
                volatilité des prix et des pertes financières éventuelles.
                L'utilisateur utilise les services de CAT2 en pleine
                connaissance de ces risques et CAT2 ne peut être tenu
                responsable des pertes subies.
            </p>

            <h2>8. Frais</h2>
            <p>
                Certains services offerts par CAT2 peuvent être soumis à des
                frais de transaction. Ces frais sont clairement indiqués au
                moment de la transaction. L'utilisateur accepte que ces frais
                soient automatiquement déduits lors de l'utilisation des
                services concernés.
            </p>

            <h2>9. Suspension et clôture de compte</h2>
            <p>
                CAT2 se réserve le droit de suspendre ou de clôturer un compte
                utilisateur, à tout moment et sans préavis, en cas de
                non-respect des présentes CGU, d’utilisation frauduleuse ou
                illégale du service, ou encore si des comportements suspects
                sont détectés.
            </p>
            <p>
                L'utilisateur peut également demander la clôture de son compte à
                tout moment en contactant le support client de CAT2.
            </p>

            <h2>10. Propriété intellectuelle</h2>
            <p>
                Tous les éléments de l'application CAT2 (logiciels, graphiques,
                logos, textes, etc.) sont protégés par des droits de propriété
                intellectuelle détenus par l'Éditeur. Toute reproduction,
                représentation ou exploitation non autorisée est strictement
                interdite.
            </p>

            <h2>11. Protection des données personnelles</h2>
            <p>
                CAT2 respecte la vie privée de ses utilisateurs et s’engage à
                protéger leurs données personnelles. Les informations
                recueillies lors de l’inscription et de l’utilisation des
                services sont traitées conformément à la réglementation en
                vigueur, notamment le Règlement Général sur la Protection des
                Données (RGPD).
            </p>
            <p>
                Les utilisateurs disposent d’un droit d'accès, de rectification
                et de suppression de leurs données personnelles, qu’ils peuvent
                exercer en contactant CAT2 via les coordonnées fournies dans
                l'application.
            </p>

            <h2>12. Responsabilité de l'Éditeur</h2>
            <p>
                L'Éditeur s'efforce d’assurer le bon fonctionnement de
                l'application CAT2 et la disponibilité continue des services.
                Toutefois, CAT2 ne peut être tenu responsable en cas de :
            </p>
            <ul>
                <li>
                    Dysfonctionnements techniques ou interruptions de service ;
                </li>
                <li>
                    Perte ou vol de cryptomonnaies liées à des failles de
                    sécurité non directement imputables à CAT2 ;
                </li>
                <li>
                    Volatilité des cryptomonnaies, erreurs ou pertes de données
                    liées aux transactions sur la blockchain Ethereum.
                </li>
            </ul>

            <h2>13. Force majeure</h2>
            <p>
                CAT2 ne pourra être tenu responsable en cas d’inexécution ou de
                retard dans l’exécution de ses obligations résultant de
                circonstances imprévisibles ou indépendantes de sa volonté,
                telles que des catastrophes naturelles, des pannes de réseau,
                des actes de terrorisme ou des conflits sociaux.
            </p>

            <h2>14. Modification des CGU</h2>
            <p>
                CAT2 se réserve le droit de modifier les présentes CGU à tout
                moment. Les utilisateurs seront informés des modifications via
                l’application. En continuant à utiliser les services après la
                mise à jour des CGU, les utilisateurs acceptent les nouvelles
                conditions.
            </p>

            <h2>15. Loi applicable et juridiction compétente</h2>
            <p>
                Les présentes CGU sont régies par le droit français. En cas de
                litige, les parties s'engagent à tenter une résolution amiable
                avant de saisir les tribunaux compétents du ressort du siège
                social de l'Éditeur.
            </p>
        </section>
    );
};

export default Cgu;
