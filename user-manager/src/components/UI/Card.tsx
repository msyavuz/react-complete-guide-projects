import React, {PropsWithChildren, ReactNode } from "react";
import classes from "./Card.module.css"

interface LayoutProps {
    children: React.ReactNode;
    className: String;
 }

export default function Card({children, className}: LayoutProps ){
    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    )
}