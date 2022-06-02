import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";


export default function AddUser(props:any) {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("")
    function addUserHandler(event:React.FormEvent) {
        event.preventDefault();
        if (enteredAge!=""&&enteredUsername!=""){
            console.log(enteredUsername, enteredAge);
            setEnteredUsername("");
            setEnteredAge("");
        }
    }
    function usernameChangeHandler(event:React.ChangeEvent<HTMLInputElement>) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event:React.ChangeEvent<HTMLInputElement>) {
        setEnteredAge(event.target.value);
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username"  type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age"type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        )
}