import {NavLink} from "react-router-dom"
const Home=()=> {
    return (
      <div className="App">
        <NavLink to='/login'>
      <button className="button">start chating</button>
      </NavLink>
      </div>
    );
  }
  
  export default Home;