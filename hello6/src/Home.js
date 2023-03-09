import { Container, Grid, Box } from "@mui/material";
import React from "react";


const Home = () => {
  return (
    <Container>
    <Grid container
    style={{height: window.innerHeight - 50}}
    alignItems={"center"}
    justifyContent={"center"}
    >
     <Grid xs={4} style={{width:400,backgroundColor:"pink",borderRadius: "25px"}}
     container
     alignItems={"center"}
     direction={"column"}>
      <Box p={5}>
        <h2>HELLO!</h2>
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
