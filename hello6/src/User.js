import React from "react";


const User =()=>
{
 
return(
    <div className="home">
       Hello, {localStorage.getItem('email')}
    </div>
)
}

export default User