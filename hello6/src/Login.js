import {Button, Container, Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import {Context} from "./index"
import firebase from 'firebase/compat/app';
import { NavLink } from "react-router-dom";
import {USER_ROUTE } from "./consts";

const Login = () => {
  
  const {auth}=useContext(Context)

  const login= async()=>{
const provider= new firebase.auth.GoogleAuthProvider()
const {user}= await auth.signInWithPopup(provider)
console.log(user);
}

const signUp=()=>{
  document.getElementById("btnSignUp").addEventListener('click', e=>{
    const email = document.getElementById("txtEmail").value;
    console.log(email);
    const pass = document.getElementById("txtPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
     console.log(error.message);
    
     console.log(pass);
    });
  })}

const signIn=()=>{
  document.getElementById("btnLogin").addEventListener('click', e=>{
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    promise.catch(e=>{ console.log(e.message)})
  })}

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
      <Box>
        <form>
          <label htmlFor="email"> Email  </label>
<input type="email" id="txtEmail" name="email"/>
<label htmlFor="password"> Password </label>
<input type="password" id="txtPassword" name="password"/><br/><br/>

<button id="btnLogin" onClick={signIn} type="submit">Sign In</button>

<p>Not a member? </p>
<button onClick={signUp} id="btnSignUp" type="submit">Sign Up </button>
        </form>
      </Box>
      <Box p={5}>
        <NavLink style={{textDecoration:"none"}} to={USER_ROUTE}>
<Button style={{color:"white",borderColor:"white"}} onClick={login} variant={"outlined"}>Sign in with Google</Button>
</NavLink>
      </Box>
     </Grid>
      </Grid>
    </Container>;
};

export default Login;