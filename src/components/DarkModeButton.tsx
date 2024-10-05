import React, { useState } from 'react';


function DarkModeButton () {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <button onClick={toggleTheme} className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            {isDarkMode ? 'Light' : 'Dark'}
            </button>
        </>
    );
}

export default DarkModeButton;  