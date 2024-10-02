import React from "react";
import '../components/button';

function Header(props) {
    const handleLogout = () => {
        window.location.href = '../OtrosHTML/Login.html';
    };
    const handleSettings = () => {
        window.location.href = '../OtrosHTML/settings.html';
    };
    return (
        <header className="header">
            <div className="app-name">TODO-app</div>
            <nav className="nav-bar">
                <button type="button" onClick={handleSettings}>Settings</button>
                <button type="button" onClick={handleLogout}>Log-Out</button>
            </nav>
        </header>
    );
}

export default Header;