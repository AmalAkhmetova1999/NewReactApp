import React, { createContext } from 'react';
import App from './App';
import { createRoot } from "react-dom/client";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChBp8o2vHpeJhAC4WMiAo7Rahkd3jbrpY",
  authDomain: "pizza-login.firebaseapp.com",
  projectId: "pizza-login",
  storageBucket: "pizza-login.appspot.com",
  messagingSenderId: "996199097017",
  appId: "1:996199097017:web:b514a1f0c4be3cc28af168",
  measurementId: "G-Q8MY3BZB2T"
};

firebase.initializeApp(firebaseConfig);
export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
}}>
    <App />
</Context.Provider>,
);


/*ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);*/