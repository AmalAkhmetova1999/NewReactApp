import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { Context } from '../index';
import {useAuthState} from "react-firebase-hooks/auth";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Chat from './Chat';
import Login from './Login';
import Home from './Home';


const AppRouter = () => {
    const {auth}=useContext(Context)
    const [user]=useAuthState(auth)
    console.log(user)
    return user ?
        (
            <Routes>
                {privateRoutes.map(({path}) =>
                    <Route key={path} path="chat" element={<Chat/>} exact={true}/>
                )}
                  <Route path="/" element={<Home/>} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path}) =>
                    <Route key={path} path="/login" element={<Login/>} exact={true}/>
                )}
              <Route path="/" element={<Home/>} />
            </Routes>
        )
};

export default AppRouter;
