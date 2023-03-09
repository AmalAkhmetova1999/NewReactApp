import {Button, Container, Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import {Context} from "./index"
import firebase from 'firebase/compat/app';
import { NavLink } from "react-router-dom";
import { USER_ROUTE } from "./consts";


const Login = () => {
  
  const {auth}=useContext(Context)

  const login= async()=>{
const provider= new firebase.auth.GoogleAuthProvider()
const {user}= await auth.signInWithPopup(provider)
console.log(user);
}

const signUp= async(e)=>{
  e.preventDefault()
    const email = document.getElementById("txtEmail").value;
    console.log(email);
    const pass = document.getElementById("txtPassword").value;
    await firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
     alert(error.message);
     localStorage.setItem('email', email);
    });
    window.location = "/user";
  }

const signIn=()=>{
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass)
    promise.catch(e=>{alert(e.message)});
    localStorage.setItem('email', email);
    window.location = "/user";
  }

  return <Container>
    <Grid container
    style={{height: window.innerHeight - 50}}
    alignItems={"center"}
    justifyContent={"center"}
    >
     <Grid style={{width:400,backgroundColor:"pink"}}
     container
     alignItems={"center"}
     direction={"column"}>
      <Box>
        <form style={{textAlign:"center"}}>
          <label style={{fontFamily:"monospace", fontSize: "14pt"}} htmlFor="email"> Email </label><br/>
<input type="email" id="txtEmail" name="email"/><br/><br/>
<label htmlFor="password" style={{fontFamily:"monospace", fontSize: "14pt"}}> Password </label><br/>
<input type="password" id="txtPassword" name="password"/><br/><br/>

<button id="btnLogin" style={{fontFamily:"monospace", fontSize: "12pt",backgroundColor:"white"}} onClick={signIn} >Sign In</button><br/><br/>

<p style={{fontFamily:"monospace", fontSize: "10pt",lineHeight:"0.2%"}}>Not a member? </p>
<button  style={{fontFamily:"monospace", fontSize: "10pt",backgroundColor:"white"}} onClick={signUp} id="btnSignUp" >Sign Up </button>
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