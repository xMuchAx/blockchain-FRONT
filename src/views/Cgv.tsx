import React from "react";
import CoinWallet from "../assets/images/svg/wallet/wallet-cat__full.svg";
import Logo from "../assets/images/svg/logo/logo-cat__white.svg";
import "../styles/Signup.scss";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

const Cgv: React.FC = () => {
    return (
        <section className="cgv">
            <h1>Conditions Générales de Vente (CGV) - CAT²</h1>
            <h2>1. Objet des présentes CGV</h2>
            <p>
                Les présentes Conditions Générales de Vente (CGV) régissent
                l’utilisation et les transactions réalisées via l’application
                CAT2, qui permet l’envoi et la réception de monnaie électronique
                sur la blockchain Ethereum. Elles définissent les droits et
                obligations des parties dans le cadre de l’utilisation des
                services de CAT2.
            </p>

            <h2>2. Identification de l’éditeur de l’application</h2>
            <p>
                L'application CAT2 est éditée par la promotion M1 DEV, pour
                l'ECV (1 Rue du Dahomey, 75011 Paris).
            </p>

            <h2>3. Services proposés par CAT2</h2>
            <p>
                CAT2 offre un service de portefeuille électronique qui permet
                aux utilisateurs de :
            </p>
            <ul>
                <li>
                    Envoyer et recevoir de la monnaie électronique basée sur la
                    blockchain Ethereum.
                </li>
                <li>
                    Consulter leur solde et l’historique de leurs transactions.
                </li>
                <li>
                    Échanger des cryptomonnaies dans un environnement sécurisé.
                </li>
            </ul>

            <h2>4. Conditions d'accès et d'inscription</h2>
            <p>
                L'accès aux services de CAT2 est réservé aux personnes majeures
                disposant de la capacité juridique. Les utilisateurs doivent
                s’inscrire en créant un compte personnel. Pour ce faire, ils
                doivent fournir des informations exactes et complètes.
            </p>

            <h2>4.1 Vérification d’identité (KYC)</h2>
            <p>
                Afin de se conformer aux obligations légales de lutte contre le
                blanchiment d'argent et le financement du terrorisme, CAT2
                pourra demander à ses utilisateurs de fournir des documents
                d’identification (KYC).
            </p>

            <h2>5. Tarification</h2>
            <p>
                L’utilisation de certains services de CAT2 peut être soumise à
                des frais. Ces frais sont clairement mentionnés lors des
                opérations (envoi, réception, ou conversion de cryptomonnaies).
                Les utilisateurs s’engagent à régler ces frais au moment de
                l’utilisation du service concerné.
            </p>

            <h2>6. Obligations des utilisateurs</h2>
            <p>Les utilisateurs s’engagent à :</p>
            <ul>
                <li>
                    Utiliser l’application conformément à la loi et aux
                    présentes CGV.
                </li>
                <li>
                    Ne pas tenter de contourner les mesures de sécurité mises en
                    place.
                </li>
                <li>
                    Ne pas utiliser CAT2 à des fins illicites (ex. : blanchiment
                    d’argent, financement du terrorisme).
                </li>
            </ul>

            <h2>7. Sécurité</h2>
            <p>
                L'éditeur de CAT2 met tout en œuvre pour assurer la sécurité des
                transactions et des fonds des utilisateurs. Cependant,
                l’utilisateur est responsable de la sécurité de ses identifiants
                et mots de passe. CAT2 ne peut être tenu responsable en cas
                d’accès non autorisé au compte d’un utilisateur du fait de
                négligence de ce dernier.
            </p>

            <h2>8. Risques liés à l’utilisation des cryptomonnaies</h2>
            <p>
                L’utilisateur reconnaît que l’utilisation de cryptomonnaies, y
                compris celles sur la blockchain Ethereum, comporte des risques
                élevés. Les prix des cryptomonnaies peuvent être extrêmement
                volatils, et CAT2 ne peut garantir aucune protection contre les
                pertes éventuelles.
            </p>

            <h2>9. Rétractation et résiliation</h2>
            <p>
                Conformément à la législation en vigueur, l'utilisateur dispose
                d'un droit de rétractation de 14 jours à compter de la création
                de son compte, à condition de n’avoir réalisé aucune transaction
                sur CAT2. Passé ce délai ou en cas d’utilisation des services,
                le compte ne pourra être résilié que conformément aux conditions
                définies par CAT2.
            </p>

            <h2>10. Responsabilité</h2>
            <p>
                L'éditeur décline toute responsabilité en cas de pertes
                financières liées à la volatilité des cryptomonnaies, à un bug
                technique ou à toute autre défaillance liée à la blockchain
                Ethereum. CAT2 n'est en aucun cas responsable des interruptions
                de service résultant de facteurs externes (ex. : panne de
                réseau, force majeure).
            </p>

            <h2>11. Données personnelles</h2>
            <p>
                CAT2 collecte et traite les données personnelles des
                utilisateurs dans le cadre de l’utilisation des services. Ces
                données sont traitées conformément à la réglementation
                applicable, notamment le Règlement Général sur la Protection des
                Données (RGPD). Les utilisateurs peuvent à tout moment demander
                l’accès, la modification ou la suppression de leurs données
                personnelles.
            </p>

            <h2>12. Propriété intellectuelle</h2>
            <p>
                Tous les éléments de l’application CAT2 (textes, graphiques,
                logos, brevets, etc.) sont la propriété exclusive de l'ECV.
                Toute reproduction, distribution ou utilisation sans
                autorisation préalable de CAT2 est interdite.
            </p>

            <h2>13. Modification des CGV</h2>
            <p>
                CAT2 se réserve le droit de modifier les présentes CGV à tout
                moment. Les utilisateurs seront informés de toute modification
                substantielle. En continuant à utiliser l’application,
                l’utilisateur accepte les CGV mises à jour.
            </p>

            <h2>14. Droit applicable et juridiction compétente</h2>
            <p>
                Les présentes CGV sont régies par le droit français. En cas de
                litige, les parties s'engagent à tenter une résolution à
                l'amiable avant de porter l'affaire devant les tribunaux
                compétents.
            </p>
        </section>
    );
};

export default Cgv;
