import React, { createContext } from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyBy50TlTX428Oe2F8XhyyK1AsbDg-XGFC4",
  authDomain: "loginandpassword-react.firebaseapp.com",
  projectId: "loginandpassword-react",
  storageBucket: "loginandpassword-react.appspot.com",
  messagingSenderId: "656435043639",
  appId: "1:656435043639:web:d5c2d2cda5481764ce8eb2",
  measurementId: "G-RNK00RH5JB"
};

firebase.initializeApp(firebaseConfig);
export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <Context.Provider value={{
    firebase,
    auth,
    firestore
}}>
    <App />
</Context.Provider>
</BrowserRouter>
);

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/

