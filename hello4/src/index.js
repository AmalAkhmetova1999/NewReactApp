import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyC0tdNovaSvLv1t8kaat2HcP44fTyy5jhA",
 authDomain: "login-react-16f7c.firebaseapp.com",
 projectId: "login-react-16f7c",
 storageBucket: "login-react-16f7c.appspot.com",
 messagingSenderId:  "26982784645",
 appId: "1:26982784645:web:8753a14621fde79decd3ec",
 measurementId: "G-B54C7TB9HS"
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