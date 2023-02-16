import {React,useContext} from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE,CHAT_ROUTE } from "../utils/consts";
import { Context } from '..';
import {useAuthState} from "react-firebase-hooks/auth";
import Home from "./Home"

const Navbar= () => {
    
    const {auth}=useContext(Context)
    const [user]=useAuthState(auth)

    const video =()=>{window.location.href = 'https://www.youtube.com/watch?v=yDExjpYV8Bw';}
    
  return <AppBar style={{backgroundColor:"#ffc107"}} position="static">
  <Toolbar variant={"dense"}>
   <Grid container justifyContent={"flex-end"}>
   
    {user ? 
    <NavLink to="/" element={<Home/>} style={{textDecoration:"none"}}>
    <Button onClick={()=> auth.signOut()} style={{color:"black",borderColor: "black"}} variant={"outlined"}>Log Out</Button>
    <Button onClick={video}  style={{color:"black",borderColor: "black",position:"absolute",left:"2%"}} variant={"outlined"}>VIDEO</Button>
    </NavLink>
    
    :
    <NavLink style={{textDecoration:"none"}} to={LOGIN_ROUTE}>
           <Button variant={"outlined"} style={{color:"black", borderColor: "black"}}>Login</Button>
           <Button onClick={video} style={{color:"black",borderColor: "black",position:"absolute",left:"2%"}} variant={"outlined"}>VIDEO</Button>
    </NavLink>
 
    }
  
   </Grid>
  </Toolbar>
</AppBar>
};

export default Navbar;