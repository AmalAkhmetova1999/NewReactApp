import { useContext, useState } from "react"
import { ImageContext } from "../App";

const SearchField=()=>{

const [searchValue,setSearchValue]=useState("");
const {fetchData,setSearchImage}=useContext(ImageContext)
const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  } 
  const handleButtonSearch=()=>{
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchValue("");
  }
  const handleEnterSearch=(e)=>{
    if(e.key==="Enter"){
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchValue("");
        setSearchImage(searchValue)
    }
  }

    return(
        <div style={{textAlign:"center"}}>
            <input 
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
            style={{
backgroundColor:"white",
border:"gray 1px",
borderTopLeftRadius:"2px",
borderBottomLeftRadius:"2px",
padding:"0.3%",
fontSize:"11pt"
            }}
            placeholder="Search Anything..."
            type={"search"}/>
            <button
            onClick={handleButtonSearch}
            disabled={!searchValue}
            style={{backgroundColor:"rgb(62, 137, 249)",
            color:"white",
            padding:"0.3%",
fontSize:"11pt",
        borderTopRightRadius:"2px",
    borderBottomRightRadius:"2px",
border:"gray 1px",}}
            
            >Search</button>
        </div>
    )

}

export default SearchField