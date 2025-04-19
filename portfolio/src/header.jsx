import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Css/Header.css';
import { themeContext } from './Context/theme';

function Header() {
    const { mode, setMode } = useContext(themeContext);

    function handleToggle() {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <header className={`header ${mode === 'dark' ? 'dark' : 'light'}`}>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/form">form</Link></li>
                    <button onClick={handleToggle} className="theme-toggle-btn">
                        <i className="fas fa-moon"></i>
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
