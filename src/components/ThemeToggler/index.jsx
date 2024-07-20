import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from '../ThemeProvider';

import './style.css';

const ThemeToggler = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleThemeChange = (checked) => {
        setDarkMode(checked);
        if (document) {
            document?.documentElement?.setAttribute('data-theme', checked ? 'dark' : 'light');
        }
    }

    return (
        <div className="theme-toggler">
            <input
                checked={darkMode}
                onChange={(e) => handleThemeChange(e.target.checked)}
                type="checkbox"
                class="checkbox"
                id="checkbox"
            />
            <label for="checkbox" class="checkbox-label">
                <FontAwesomeIcon className="icon" icon={faMoon} fixedWidth />
                <FontAwesomeIcon className="icon" icon={faSun} fixedWidth />
                <span class="ball"></span>
            </label>
        </div>
    )
}

export default ThemeToggler
