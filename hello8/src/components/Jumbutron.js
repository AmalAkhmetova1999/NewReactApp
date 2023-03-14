import React from "react";

const Jumbutron=({children})=>{
return(
    <div style={{backgroundColor:"rgb(12, 9, 58)", alignItems:"center",marginTop:"0%",padding:"1%"}}>
        <div style={{maxWidth:"100%"}}>
<h1 style={{textAlign:"center",color:"white",fontFamily:"monospace",fontSize:"14pt"}}>Find images</h1>
{children}
        </div>
        
    </div>
)

}

export default Jumbutron