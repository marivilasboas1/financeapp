import React, {Component} from 'react';
import { View, Text } from "react-native";
import {Actions} from 'react-native-router-flux';
import styles from './SplashStyle';

export default class Splash extends Component{
    
    constructor(props) {
        super(props);
        
        setTimeout(()=>{
            Actions.reset("login");
        },1000);
    }

    render(){

        console.disableYellowBox = true;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>SPLASH</Text>
            </View>
        );
    }
}

