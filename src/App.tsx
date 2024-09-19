import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Home from "./views/Index";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./views/Dashboard";

// Styles
import "./assets/styles/Main.scss";

const App: React.FC = () => {
    const location = useLocation();

    const hidingComponent =
        location.pathname === "/login" || location.pathname === "/signup";

    return (
        <>
            {!hidingComponent && <Header />}
            <main className="mainWrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </main>
            {!hidingComponent && <Footer />}
        </>
    );
};

const AppWrapper: React.FC = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
