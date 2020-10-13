import React, {useContext} from "react";
import clsx from "clsx";
import {ThemeContext} from "./ThemeContext.js";


export default function ButtonTime(props) {
//pass down time increment function from props!





    const context = useContext(ThemeContext)

    
    const classes = clsx({
        // dark: context.theme==="blues"
        cool: context.themeSecondary==="cool", 
        warm: context.themeSecondary==="warm"
    })

return <button className={classes} onClick={props.action}>{props.value}</button>;
}