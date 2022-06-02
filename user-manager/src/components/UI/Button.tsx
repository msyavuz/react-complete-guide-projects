import React from "react";
import classes from "./Button.module.css"



interface ButtonProps {

    onClick?: (e:React.MouseEvent)=> void;
    type?: "submit" | "reset";
    children: string;

}

export default function Button({onClick, type, children}:ButtonProps){

    return (
        <button className={classes.button} type={type||"button"} onClick={onClick}>{children}</button>
    )


}