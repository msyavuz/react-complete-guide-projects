import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal, {ErrorModalProps} from "../UI/ErrorModal";

interface AddUserProps{
    onAddUser: Function
}

export default function AddUser(props:AddUserProps) {

    const nameInputRef = useRef<HTMLInputElement>(null!);
    const ageInputRef = useRef<HTMLInputElement>(null!);
    const [error, setError] = useState<ErrorModalProps | null>();

    function addUserHandler(event:React.FormEvent) {
        event.preventDefault();
        const enteredAge = ageInputRef.current.value;
        const enteredUsername = nameInputRef.current.value;
        if (enteredAge!=""&&enteredUsername!=""){
            props.onAddUser(enteredUsername, enteredAge);
            ageInputRef.current.value = "";
            nameInputRef.current.value = "";
        }else{
            setError({
                title: "Invalid input",
                message: "Fields cannot be empty"
            });
        }
    }

    function errorHandler(){
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"  type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age</label>
                    <input id="age"type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
        )
}