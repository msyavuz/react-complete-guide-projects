import React, {PropsWithChildren, ReactNode } from "react";
import classes from "./Card.module.css"

interface CardProps {
    children: React.ReactNode;
    className?: String;
 }

export default function Card({children, className}: CardProps ){
    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    )
}