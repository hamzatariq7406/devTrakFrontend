import React, { createContext } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <ThemeContext.Provider value={{
            darkMode,
            setDarkMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
