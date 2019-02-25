import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Alert, ActivityIndicator, AsyncStorage, ScrollView } from 'react-native';
import { Input } from 'native-base' ;
import { Actions } from 'react-native-router-flux';
import styles from './LoginStyle';
import constantsAPI from '../../../constantsApi/ConstantsApi';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            show: false
        };
    }

    setVariable(text, field) {

        if (field == 'email') {

            this.setState({
                email: text,
            })

        } else if (field == 'password') {

            this.setState({
                password: text,
            })
        }
    }

    loginAttempt = () => {

        if (this.state.email == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo email');

        } else if (this.state.password == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo senha');

        } else {

            this.setState({
                show: true
            });

            let colletion = {}
			colletion.email = this.state.email;
            colletion.password = this.state.password;
            const json = JSON.stringify(colletion);

            let url = constantsAPI.BASE_URL+constantsAPI.LOGIN;

			fetch(url, {
				method: 'POST',
				headers: {
                    'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: json
			})
			.then((response) => response.json())
			.then((response) => {
                
                this.setState({
                    show: false
                });

                let id = JSON.stringify(response.id);
                let id_replace = id.replace(/"/g,'');

                let name = JSON.stringify(response.id);
                let username_replace = name.replace(/"/g,'');

                AsyncStorage.setItem('id', id_replace);
                AsyncStorage.setItem('name', username_replace);                
                            
                console.log(response);
                        
                Actions.dashboard();
        
			})
			.catch(() => {
                this.setState({
                    show: false
                });
                Alert.alert('Atenção', 'senha incorreta');

			})
			.done()

        }

    }

    render() {

        const shadowStyle={
            shadowOpacity: 0.5,
            shadowRadius: 15,
            shadowColor: 'gray',
            shadowOffset: {width: 1, height:1},
        }

        console.disableYellowBox = true;
        
        return (

            <View style={styles.container}>
                <ScrollView>
                <View style={styles.logoContainer}>

                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/symbol.png')}
                    />
                </View>
                
                {this.state.show && <ActivityIndicator size="large" color={"#007AFF"} animating={this.state.show} style={{flex: 1, justifyContent: 'center', marginBottom: 5, marginTop: 5 }} />}

                <View>

                    <View style={styles.form}>
                        <Input 
                            keyboardType='email-address'
                            autoCapitalize='none'
                            style={styles.inputTitle} 
                            placeholder="Email"
                            onChangeText={(text) => this.setVariable(text, 'email')} 
                        />
                    </View>
                    <View style={styles.line}/>


                    <View style={styles.form}>
                        <Input 
                            autoCapitalize='none'
                            style={styles.inputTitle}
                            placeholder="Senha"
                            secureTextEntry={true}
                            onChangeText={(text) => this.setVariable(text, 'password')} 
                        />
                    </View>
                    <View style={styles.line}/>


                    <View style={styles.sessionButton}>
                        <TouchableOpacity style={[styles.buttonGradient, shadowStyle]} onPress={() => this.loginAttempt()}>
                                <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>  

                    <TouchableOpacity onPress={() => this.loginAttempt()}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </View>

        );
    }
}