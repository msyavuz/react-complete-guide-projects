import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal, {ErrorModalProps} from "../UI/ErrorModal"

interface AddUserProps{
    onAddUser: Function
}

export default function AddUser(props:AddUserProps) {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState<ErrorModalProps | null>();

    function addUserHandler(event:React.FormEvent) {
        event.preventDefault();
        if (enteredAge!=""&&enteredUsername!=""){
            props.onAddUser(enteredUsername, enteredAge);
            setEnteredUsername("");
            setEnteredAge("");
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

    function usernameChangeHandler(event:React.ChangeEvent<HTMLInputElement>) {
        setEnteredUsername(event.target.value);
    }

    function ageChangeHandler(event:React.ChangeEvent<HTMLInputElement>) {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"  type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age"type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
        )
}