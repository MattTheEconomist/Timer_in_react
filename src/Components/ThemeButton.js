import React, {useContext} from "react";
import clsx from "clsx";
import {ThemeContext} from "./ThemeContext.js";


export default function Button(props) {

    const context = useContext(ThemeContext)

    
    const classes = clsx({
        blues: context.theme==="blues", 
        reds: context.theme==="reds"
    })

    return <button id="themeButton" className={classes} onClick={() => context.toggleTheme()}>Toggle Theme </button>;
}