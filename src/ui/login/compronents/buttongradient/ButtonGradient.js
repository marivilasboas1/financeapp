
import React, {Component} from 'react';
import { View, TouchableOpacity} from "react-native";
import { Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ButtonGradientStyle'
import colors from '../../../../assets/colors/Colors'

export default class LoginScreen extends Component{

    constructor(props) {
        super(props);
    }

    render(){

        console.disableYellowBox = true;

        return (
                <LinearGradient style={styles.linear} colors={['#FF7DA4', '#B24BC1']}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{this.props.text}</Text>
                    </TouchableOpacity>                        
                </LinearGradient>
        );
    }
}

