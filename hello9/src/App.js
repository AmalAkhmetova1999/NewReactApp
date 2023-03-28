import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import './App.css';
import Home from "./Home";
import User from "./User"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/user" element={<User/>}/>
  </Routes>
    </div>
  );
}

export default App;
