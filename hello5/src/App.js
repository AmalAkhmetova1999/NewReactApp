
import React, { useState } from "react";
import Navbar from "./Navbar";
import AppRouter from "./AppRouter";
const defaultLanguage = "se";
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  React.useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="App">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Navbar/>
        <AppRouter/>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;