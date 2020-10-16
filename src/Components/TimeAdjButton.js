import React, {useContext} from "react";
import clsx from "clsx";
import {ThemeContext} from "./ThemeContext.js";


export default function ButtonTime(props) {
//pass down time increment function from props!

const {action, value} = props
let idValue = ''; 

if(value==="+"){
    idValue="plusButton"
}else if(value==="-"){
    idValue="minusButton"

}





    const context = useContext(ThemeContext)

    
    const classes = clsx({
        // dark: context.theme==="blues"
        cool: context.themeSecondary==="cool", 
        warm: context.themeSecondary==="warm"
    })

return <button className={classes} onClick={action} id={idValue}>{value}</button>;
}