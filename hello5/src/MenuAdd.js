import React, { useContext } from "react";
import { LanguageContext } from "./App";
import "./little_Meny.css";
import "./main.css";
import basket from "./basket";
import myFunction from "./myFunction";

function MenuAdd() {
  const languages = {
    en: {
      home: "Home",
      menu: "MENU",
      contact: "OPENING HOURS & CONTACT",
      admin: "LOGIN AS ADMINISTRATOR"

    },
    se: {
      home: "Hem",
      menu: "MENY",
      contact: "ÖPPETTIDER & KONTAKT",
      admin: "LOGGA IN SOM ADMINISTRATÖR"
    },
    ru: {
      home: "Главная",
      menu: "МЕНЮ",
      contact: "ВРЕМЯ РАБОТЫ И КОНТАКТЫ",
      admin: "ВОЙТИ КАК АДМИНИСТРАТОР"
    }
  };

  const [language, setLanguage] = useContext(LanguageContext);
  console.log(`language`, language);

  return (
    <>
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
              <a href="index.html" className="m">
                {languages[language].admin}
              </a>
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
    </>
  );
}

export default MenuAdd;
