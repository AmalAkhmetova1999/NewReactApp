import {React,useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css'
import Loader from './components/Loader';
import { Context } from './index';
import {useAuthState} from "react-firebase-hooks/auth";



const App = () => {
  const {auth}=useContext(Context)
  const [user,loading,error]=useAuthState(auth)
  if (loading)
  {return <Loader/>}

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;














/*import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Login/>}/>
          </Route>
          <Route exact path='/register' element={<PrivateRoute/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Fragment>
    </Router>
    
  );
}
export default App

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AppRouter from "./components/AppRouter";
import './App.css'


const App = () => {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<AppRouter/>}>
            <Route exact path='/' element={<Login/>}/>
          </Route>
          <Route exact path='/register' element={<AppRouter/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    
  );
    
};

export default App;*/