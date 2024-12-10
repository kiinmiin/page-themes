import React, { useContext, useState } from "react";
import ThemeContext from "../../themes/theme-context";

const ThemeButton = () => {
    const {toggleTheme} = useContext(ThemeContext); 
    
    return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeButton