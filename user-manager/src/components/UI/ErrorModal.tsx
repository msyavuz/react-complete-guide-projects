import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

export interface ErrorModalProps{
    title:string,
    message: string,
    onConfirm?: (e:React.MouseEvent)=> void;
}

interface BackdropProps{
    onConfirm?: (e:React.MouseEvent)=> void;
}

const Backdrop = ({onConfirm}:BackdropProps)=>{
    return <div className={classes.backdrop} onClick={onConfirm}/>
}

const ModalOverlay = ({title, message, onConfirm}:ErrorModalProps) => {
    return (
        <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>
            </Card>
    )
}

export default function ErrorModal({title, message, onConfirm}: ErrorModalProps){
    return(
        <>    
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm}/>, document.getElementById("backdrop-root")!)}
            {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm} />, document.getElementById("overlay-root")!)}
        </>
    )
}