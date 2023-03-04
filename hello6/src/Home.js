import {Button, Container, Grid, Box } from "@mui/material";
import React from "react";


const Home = () => {
  return (
    <Container>
    <Grid container
    style={{height: window.innerHeight - 50}}
    alignItems={"center"}
    justifyContent={"center"}
    >
     <Grid xs={4} style={{width:400,backgroundColor:"#4f4c4c"}}
     container
     alignItems={"center"}
     direction={"column"}>
      <Box p={5}>
<Button style={{color:"white",borderColor:"white"}}  variant={"outlined"}>Hello my friend! Let’s see how much you know about the Harry Potter series! I hope you will enjoy it and recomend to your friends! Click "LOGIN" button in the right corner to start the Quiz!<br/> Or just relax and push "VIDEO" button<br/> ♡</Button>
      </Box>
     </Grid>
      </Grid>
      
    </Container>
  )
};

export default Home;



/*import React from "react";
import app from "./base"

const Home =()=>
{
return(
    <div className="home">
        <h2>Home</h2>
        <button onClick={()=>app.auth().signOut()}>Sign Out</button>
    </div>
)
}

export default Home*/
