
import Image from "./Image"
import { useContext } from "react"
import { ImageContext } from "../App"
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
const Images=()=>{
    const {response,isLoading, searchImage}=useContext(ImageContext)
    return(
        <>
        <h1 style={{textAlign:"center",
    fontFamily:"monospace",
    fontSize:"12pt",
   textDecoration:"underline"}}>
            Results for {searchImage || 'Cats' }
        </h1>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        rowSpacing={{ xs: 1, sm: 2, md: 2 }}
        paddingLeft={"7%"}
        paddingRight={"7%"}
        paddingTop={"2%"}
        alignItems={"center"}>

        
    {isLoading ? <CircularProgress
      size={70}
      sx={{
        position: "fixed",
        left: "47%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        color:"rgb(12, 9, 58)"
      }}
    />: response.map((data,key)=><Grid item lg={3} md={4} sm={6}>
    <Item  style={{ width: "250px",
  height: "170px",
  overflow: "hidden",textAlign:"center",
  borderRadius:"5%"}}><Image key={key} data={data}/></Item>
  </Grid>)}

 </Grid>
       
        </>
    )
}
export default Images


/* <div>
        <Grid container>
  <Grid md={2} lg={3} >
    <Item>Image 1</Item>
  </Grid>
  <Grid md={2} lg={3} >
  <Item>Image 1</Item>
  </Grid>
  <Grid md={2} lg={3} >
  <Item>Image 1</Item>
  </Grid>
  <Grid md={2} lg={3} >
  <Item>Image 1</Item>
  </Grid>
  <Grid md={2} lg={3} >
  <Item>Image 1</Item>
  </Grid>
  <Grid md={2} lg={3} >
  <Item>Image 1</Item>
  </Grid>
</Grid>
        </div> */