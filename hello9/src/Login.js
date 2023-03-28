import {Container, Grid, Box } from "@mui/material";

const Login=()=> {

    const signIn= async(e)=>{
        const username = document.getElementById("username").value;
        const secret = document.getElementById("secret").value;
        e.preventDefault()
      const res=await fetch('https://api.chatengine.io/users/me/', {
          headers: {
              'Project-ID': 'b5ee3276-0dd9-44be-a7e9-3470bcf39da8',
              'User-Name': username,
              'User-Secret': secret
          }
      });
      localStorage.setItem('name', username);
      localStorage.setItem('password', secret);
      let reslt = await res.json();
      console.log(reslt);
      if (res.ok) {
      window.location = "/user";
      }
      else {alert('Username and password are incorrect. Please try again or create account')}
     }

     const signUp=async()=>{
        const username = document.getElementById("username").value;
        const secret = document.getElementById("secret").value;
        const response = await fetch('https://api.chatengine.io/users/', {
          method: 'POST',
          headers: {
              'PRIVATE-KEY': '53a0fe49-677d-4bb6-a43d-3b0fb26337f3',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({username:username, secret: secret}) 
      });
      let result = await response.json();
      console.log(result);
      if (response.ok) {alert('OK!')
      window.location = "/user";}
     else {alert('error')}
    
       
      }

    return <Container>
    <Grid container
    style={{height: window.innerHeight - 50}}
    alignItems={"center"}
    justifyContent={"center"}
    >
     <Grid style={{width:400,backgroundColor:"rgb(63, 63, 92)",color:"white",padding:"1%"}}
     container
     alignItems={"center"}
     direction={"column"}>
      <Box>
        <form style={{textAlign:"center"}}>
          <label style={{fontFamily:"monospace", fontSize: "14pt"}} htmlFor="email"> username </label><br/>
<input type="name" id="username" name="email"/><br/><br/>
<label htmlFor="password" style={{fontFamily:"monospace", fontSize: "14pt"}}> password </label><br/>
<input type="password" id="secret" name="password"/><br/><br/>
<button id="btnLogin" style={{fontFamily:"monospace", fontSize: "12pt",backgroundColor:"white",color:"rgb(63, 63, 92)"}} onClick={signIn} >Sign In</button><br/><br/>

<p style={{fontFamily:"monospace", fontSize: "10pt",lineHeight:"0.2%"}}>Not a member? </p>
<button  style={{fontFamily:"monospace", fontSize: "10pt",backgroundColor:"white",color:"rgb(63, 63, 92)"}} onClick={signUp} id="btnSignUp" >Sign Up </button>
        </form>
      </Box>
     </Grid>
      </Grid>
    </Container>;
  
}

export default Login;