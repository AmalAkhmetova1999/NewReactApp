import {React,useContext} from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Button, Grid } from "@mui/material";
import { BrowserRouter, NavLink} from "react-router-dom";
import { Context } from './index';
import {useAuthState} from "react-firebase-hooks/auth";
import basket from "./basket";
import myFunction from "./myFunction";
import { LanguageContext } from "./App";
import "./main.css";
import { LOGIN_ROUTE } from "./utils/consts";
import Home from "./Home";

const Navbar= () => {
    const languages = {
        en: {
          home: "Home",
          menu: "MENU",
          contact: "OPENING HOURS & CONTACT",
          admin: "LOGIN AS ADMINISTRATOR",
          logout: "LOG OUT"
    
        },
        se: {
          home: "Hem",
          menu: "MENY",
          contact: "ÖPPETTIDER & KONTAKT",
          admin: "LOGGA IN SOM ADMINISTRATÖR",
          logout: "LOGGA UT"
        },
        ru: {
          home: "Главная",
          menu: "МЕНЮ",
          contact: "ВРЕМЯ РАБОТЫ И КОНТАКТЫ",
          admin: "ВОЙТИ КАК АДМИНИСТРАТОР",
          logout: "ВЫЙТИ"
        }
      };
    
      const [language, setLanguage] = useContext(LanguageContext);
      console.log(`language`, language);
    
    const {auth}=useContext(Context)
    const [user]=useAuthState(auth)


    
  return <AppBar style={{background:"none"}} position="static">
  <Toolbar variant={"dense"}>
   <Grid container justifyContent={"flex-end"}>
   
    {user ? 
    <BrowserRouter>
      <div>
        <div className="topnav">
          <nav className="navbar" onClick={(e) => e.stopPropagation()}>
            <li className="topnav-right">
              <a style={{fontSize:'14pt'}} href="index.html">{languages[language].home}</a>

              <div className="dropdown">
                <button onClick={myFunction} id="language" className="dropbtn">
                  <img
                    className="language"
                    src={require("./language.png")}
                    alt=""
                  />
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <button value="en" id="en" onClick={() => setLanguage("en")}>
                    EN
                  </button>
                  <button value="se" id="se" onClick={() => setLanguage("se")}>
                    SE
                  </button>
                  <button onClick={() => setLanguage("ru")}>RU</button>
                </div>
              </div>
            </li>

            <div className="topnav-right">
              <div className="right">
              <a href="index.html" className="m">
                {languages[language].contact}
              </a>
              <a href="index.html" className="m">
                {languages[language].menu}
              </a>
              <NavLink to="/" element={<Home/>} style={{textDecoration:"none"}}><Button onClick={()=> auth.signOut()} style={{color:"#777",borderColor: "#777"}} variant={"outlined"}>{languages[language].logout}</Button>
    </NavLink>
              </div>
            </div>
            <button id="basketId">
              <img
                className="basket"
                src={require("./basket.png")}
                alt=""
                onClick={basket}
              />
            </button>
          </nav>
        </div>
      </div>
      
    </BrowserRouter>
    
    :
    <BrowserRouter>
   
    <div>
        <div className="topnav">
          <nav className="navbar" onClick={(e) => e.stopPropagation()}>
            <li className="topnav-right">
              <a style={{fontSize:'14pt'}} href="index.html">{languages[language].home}</a>

              <div className="dropdown">
                <button onClick={myFunction} id="language" className="dropbtn">
                  <img
                    className="language"
                    src={require("./language.png")}
                    alt=""
                  />
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <button value="en" id="en" onClick={() => setLanguage("en")}>
                    EN
                  </button>
                  <button value="se" id="se" onClick={() => setLanguage("se")}>
                    SE
                  </button>
                  <button onClick={() => setLanguage("ru")}>RU</button>
                </div>
              </div>
            </li>

            <div className="topnav-right">
              <div className="right">
              <a href="index.html" className="m">
                {languages[language].contact}
              </a>
              <a href="index.html" className="m">
                {languages[language].menu}
              </a>
              <NavLink to={LOGIN_ROUTE}>
              <a href="index.html" className="m">
                {languages[language].admin}
              </a>
              </NavLink>
              </div>
            </div>
            <button id="basketId">
              <img
                className="basket"
                src={require("./basket.png")}
                alt=""
                onClick={basket}
              />
            </button>
          </nav>
        </div>
      </div>
     
    </BrowserRouter>
 
    }
  
   </Grid>
  </Toolbar>
</AppBar>
};

export default Navbar;