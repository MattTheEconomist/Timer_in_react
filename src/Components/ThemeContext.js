import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("blues")
  const [themeSecondary, setThemeSecondary] = useState("cool")
  const [themeTertiary, setThemeTertiary] = useState("purps")

  function toggleTheme(){
    if (theme==="blues"){
        setTheme("reds")
        setThemeSecondary("warm")
        setThemeTertiary("pinks")
    }else{
      setTheme("blues")
      setThemeSecondary("cool")
      setThemeTertiary("purps")
    }
  }

  const value = {
    theme: theme, 
    toggleTheme: toggleTheme, 
    themeSecondary: themeSecondary, 
    themeTertiary: themeTertiary
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
