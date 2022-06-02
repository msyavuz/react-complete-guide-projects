import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList, {User, UsersListProps} from './components/Users/UsersList';
import React, {useState} from "react";

function App() {
  
  const initialUserList:User[]=[]
  const [usersList, setUsersList] = useState(initialUserList);


  function addUserHandler(username:string, age:string){
    setUsersList(
      (prevUsersList)=>[...prevUsersList, {username:username, age:age, id:Math.random().toString()}]
    );
  }

  return (
    <div className="App">
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  )
  
  
}

export default App
