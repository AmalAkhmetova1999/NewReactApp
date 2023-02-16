import {Button, Container, Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import {Context} from "../index"
import firebase from 'firebase/compat/app';
import { NavLink } from "react-router-dom";
import Chat from "./Chat";
import { CHAT_ROUTE } from "../utils/consts";

const Login = () => {
  
  const {auth}=useContext(Context)

  const login= async()=>{
const provider= new firebase.auth.GoogleAuthProvider()
const {user}= await auth.signInWithPopup(provider)
console.log(user)
}

  return <Container>
    <Grid container
    style={{height: window.innerHeight - 50}}
    alignItems={"center"}
    justifyContent={"center"}
    >
     <Grid style={{width:400,backgroundColor:"#4f4c4c"}}
     container
     alignItems={"center"}
     direction={"column"}>
      <Box p={5}>
        <NavLink style={{textDecoration:"none"}} to={CHAT_ROUTE}>
<Button style={{color:"white",borderColor:"white"}} onClick={login} variant={"outlined"}>Sign in with google Google</Button>
</NavLink>
      </Box>
     </Grid>
      </Grid>
    </Container>;
};

export default Login;