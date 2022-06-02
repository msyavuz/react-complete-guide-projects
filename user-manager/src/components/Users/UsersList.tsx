import React from "react";
import Card from "../UI/Card"
import classes from "./UsersList.module.css"

export interface User{
    username:string,
    age:string,
    id: string
}

export interface UsersListProps {
    users: [User] | User[];
}

export default function UsersList({users}:UsersListProps) {
    
    return (
    <Card className={classes.users}>
        <ul>
            {users.map(user => <li key={user.id}>{user.username} ({user.age})</li>)}
        </ul>
    </Card>
    )
}