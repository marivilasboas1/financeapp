import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Splash from '../ui/splash/screen/Splash';
import Login from '../ui/login/screen/Login';
import Insert from '../ui/insert/screen/Insert';
import Dashboard from '../ui/dashboard/screen/Dashboard';
import Transation from '../ui/transation/screen/Transation';

const RouterComponent = () =>{
    return (
        <Router>
            <Scene key = 'root'>
                <Scene 
                    key = "splash"
                    component = {Splash}
                    hideNavBar
                     />
                <Scene 
                    key = "login"
                    initial
                    component = {Login}
                    hideNavBar />    
                <Scene 
                    key = "insert"
                    component = {Insert}
                    hideNavBar />    
                <Scene 
                    key = "dashboard"
                    component = {Dashboard}
                    hideNavBar 
                     />   
                <Scene 
                    key = "transation"
                    component = {Transation}
                    hideNavBar />    
            </Scene>
        </Router>
    );
};

export default RouterComponent;