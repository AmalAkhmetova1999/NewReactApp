import React, {useContext} from 'react';
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import { Context } from './index';
import {useAuthState} from "react-firebase-hooks/auth";
import {privateRoutes, publicRoutes} from "./routes";
import Admin from './Admin';
import Login from './Login';
import Home from './Home';


const AppRouter = () => {
    const {auth}=useContext(Context)
    const [user]=useAuthState(auth)
    console.log(user)
    return user ?
        (
            <BrowserRouter>
            <Routes>
                {privateRoutes.map(({path}) =>
                    <Route key={path} path="/admin" element={<Admin/>} exact={true}/>
                )}
                   <Route path="/" element={<Home/>} />
            </Routes>
            </BrowserRouter>
        )
        :
        (
            <BrowserRouter>
            <Routes>
                {publicRoutes.map(({path}) =>
                    <Route key={path} path="/login" element={<Login/>} exact={true}/>
                )}
             <Route path="/" element={<Home/>} />
            </Routes>
            </BrowserRouter>
        )
};

export default AppRouter;
