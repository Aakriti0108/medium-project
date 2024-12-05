import React from "react";


const UserList = props =>{
    return (
    <div >
        <ul>
         {props.users.map(user=>
         <li key={user.id}>{user.name} ({user.age}years old) </li>
         )}
         </ul>
    </div>
    
    )
}

export default UserList;