import React, {Component} from 'react';
import { View,} from "react-native";
import { Form, Label, Input, Item} from 'native-base';
import ButtonGradient from '../buttongradient/ButtonGradient';
import styles from './LoginFormStyle'

export default class LoginScreen extends Component{

    constructor(props) {
        super(props);
    }

    render(){

        console.disableYellowBox = true;

        return (
                <View style={styles.container}>
                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.label}>Username</Label>
                            <Input style={styles.input}/>
                        </Item>
                        <Item stackedLabel>
                            <Label style={styles.label}>Username</Label>
                            <Input style={styles.input}/>
                        </Item>
                    </Form>
                    <ButtonGradient text="Entrar"/>
                </View>
        );
    }
}

