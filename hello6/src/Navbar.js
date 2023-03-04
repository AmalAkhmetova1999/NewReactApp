import {React,useContext} from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "./consts";
import { Context } from './index';
import {useAuthState} from "react-firebase-hooks/auth";
import Home from "./Home"

const Navbar= () => {
    
    const {auth}=useContext(Context)
    const [user]=useAuthState(auth)

  return <AppBar style={{backgroundColor:"#ffc107"}} position="static">
  <Toolbar variant={"dense"}>
   <Grid container justifyContent={"flex-end"}>
   
    {user ? 
    <NavLink to="/" element={<Home/>} style={{textDecoration:"none"}}>
    <Button onClick={()=> auth.signOut()} style={{color:"black",borderColor: "black"}} variant={"outlined"}>Log Out</Button>
    </NavLink>
    :
    <NavLink style={{textDecoration:"none"}} to={LOGIN_ROUTE}>
           <Button variant={"outlined"} style={{color:"black", borderColor: "black"}}>Login</Button>
              </NavLink>
 
    }
  
   </Grid>
  </Toolbar>
</AppBar>
};

export default Navbar;