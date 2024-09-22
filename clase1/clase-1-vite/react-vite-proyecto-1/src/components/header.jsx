import React from "react";
import './button';

function Header() {
    return (
        <header className="header">
            <div className="app-name">TODO-app</div>
        <nav className="nav-bar">
            <button className="nav-bar_button" text="Settings" />
            <button className="nav-bar_button" text="Log-Out" />
        </nav>
        </header>
    );
}

export default Header;