import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("blues")
  const [themeSecondary, setThemeSecondary] = useState("cool")

  function toggleTheme(){
    if (theme=="blues"){
        setTheme("reds")
        setThemeSecondary("warm")
    }else{
      setTheme("blues")
      setThemeSecondary("cool")
    }
  }

  const value = {
    theme: theme, 
    toggleTheme: toggleTheme, 
    themeSecondary: themeSecondary
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
