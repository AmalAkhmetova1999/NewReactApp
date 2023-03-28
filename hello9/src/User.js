import React from 'react';
import { ChatEngine } from "react-chat-engine";

const User=()=> {
 
        return (
            <ChatEngine
                projectID='b5ee3276-0dd9-44be-a7e9-3470bcf39da8'
                userName={localStorage.getItem('name')}
                userSecret={localStorage.getItem('password')}
            />
        );
  }
  
  export default User;