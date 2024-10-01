import React, { useState } from 'react';



function DarkModeButton () {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleTheme}>
            {isDarkMode ? 'Light' : 'Dark'}
            </button>
        </div>
    );
}

export default DarkModeButton;