import React from "react";
import './button';

function Header() {
    return (
        <header className="header">
            <div className="app-name">TODO-app</div>
        <nav className="nav-bar">
            <button type="">{Settings}</button>
            <button type="">{Log-Out}</button>
        </nav>
        </header>
    );
}

export default Header;