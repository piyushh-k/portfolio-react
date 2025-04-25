import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './Css/Header.css';
import { themeContext } from './Context/theme';
import { ToastContext } from "./Context/ToastContext";

function Header() {
    const { mode, setMode } = useContext(themeContext);
    const { showToast } = useContext(ToastContext);

    function handleToggle() {
        setMode((prevMode) => {
            let newMode;
            if (prevMode === 'light') {
                newMode = 'dark';
                showToast("🌙 Dark Mode Enabled", "success");
            } else {
                newMode = 'light';
                showToast("☀️ Light Mode Enabled", "success");
            }
            return newMode;
        });
    }

    return (
        <header className={`header ${mode === 'dark' ? 'dark' : 'light'}`}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/form"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Form
                        </NavLink>
                    </li>
                    <button onClick={handleToggle} className="theme-toggle-btn">
                        <i className="fas fa-moon"></i>
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
