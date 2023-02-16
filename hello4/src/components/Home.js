import {Button, Container, Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import {Context} from "../index"
import firebase from 'firebase/compat/app';
import { NavLink } from "react-router-dom";
import Chat from "./Chat";
import { CHAT_ROUTE } from "../utils/consts";

const Home = () => {
  return (
    <Container>
    <Grid container
    style={{height: window.innerHeight - 50}}
    alignItems={"center"}
    justifyContent={"center"}
    >
             <Grid item xs={3}><img src={require("./arrowLeft.png")}  style={{width:"250px",position:"absolute",left:"5%",top:"15%"}} /></Grid>
     <Grid xs={4} style={{width:400,backgroundColor:"#4f4c4c"}}
     container
     alignItems={"center"}
     direction={"column"}>
      <Box p={5}>
<Button style={{color:"white",borderColor:"white"}}  variant={"outlined"}>Hello my friend! Let’s see how much you know about the Harry Potter series! I hope you will enjoy it and recomend to your friends! Click "LOGIN" button in the right corner to start the Quiz!<br/> Or just relax and push "VIDEO" button<br/> ♡</Button>
      </Box>
     </Grid>
     <Grid item xs={3}><img src={require("./arrowRight.png")}  style={{width:"250px",position:"absolute",right:"5%",top:"15%"}} /></Grid>

      </Grid>
      
    </Container>
  )
};

export default Home;