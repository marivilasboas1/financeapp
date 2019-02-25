import React, {Component} from 'react';
import { View, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import {Header, Text, Title, Left, Right, Body, Input, Picker, Button, Icon} from 'native-base' ;
import styles from './InsertStyle';
import { TextInputMask } from 'react-native-masked-text'
import constantsAPI from '../../../constantsApi/ConstantsApi';
import { Actions } from 'react-native-router-flux';

export default class InsertScreen extends Component{


    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            value: '',
            type: '',
            category: ''
        };

        AsyncStorage.getItem("id").then((id) => {
            this.setState({
                id: id,
            })
        });
    }

    setVariable(text, field) {

        if (field == 'title') {

            this.setState({
                title: text,
            })

        } else if (field == 'value') {

            this.setState({
                value: text,
            })
        } else if (field == 'type') {

            this.setState({
                type: text,
            })
        } else if (field == 'category') {

            this.setState({
                category: text,
            })
        }
    }

    insertAttempt = () => {

        if (this.state.title == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo título');

        } else if (this.state.value == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo valor');

        } else if (this.state.type == '') {

            Alert.alert('Atenção', 'Por favor selecione o tipo ');

        }else if (this.state.category == '') {

            Alert.alert('Atenção', 'Por favor selecione a categoria ');

        }else {

            let colletion = {}
            colletion.id = this.state.id;
			colletion.title = this.state.title;
            colletion.value = this.state.value;
            colletion.type = this.state.type;
            colletion.category = this.state.category;

            const json = JSON.stringify(colletion);

            let url = constantsAPI.BASE_URL+constantsAPI.INSERT_DATA;

			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			})
			.then((response) => response.json())
			.then((response) => {
                
                console.log(response);
                Alert.alert('Atenção', 'Dados inseridos com sucesso');
			})
			.catch(() => {

                Alert.alert('Atenção', 'Erro ao inserir dados');
			})
			.done()

        }

    }

    backLogin = () => {
        return Actions.pop();
    }

    
    render(){

        const shadowStyle={
            shadowOpacity: 0.5,
            shadowRadius: 15,
            shadowColor: 'gray',
            shadowOffset: {width: 1, height:1},
        }

        console.disableYellowBox = true;

        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.backLogin()}>
                        <Icon style={{color: '#FFFFFF'}} name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>TRANSAÇÕES</Title>
                    </Body>
                    <Right />
                </Header>

                <View style={styles.sessionValue}>
                    <TextInputMask
                            type={'money'}
                            keyboardType='numeric'
                            autoCapitalize='none'
                            placeholder="R$0,00"
                            autoFocus = {true}  
                            style={styles.input}        
                            onChangeText={value => this.setState({ value })}
                            value={this.state.value} 
                        />
                </View>

                <View style={styles.sessionAlert}>
                    <Text style={styles.alert}>Eba ! </Text>
                    <Text style={styles.message}>Que bom saber que tem dimdim entrando :)</Text>
                    <Text style={styles.point}>….</Text>
                </View>

                <View style={styles.sessionForm}>
                    <View style={styles.form}>
                        <Input style={styles.inputTitle} placeholder='Digite o título' onChangeText={(text) => this.setVariable(text, 'title')} />
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.view}>
                        <View style={styles.form}>
                        <Picker
                            textStyle={{color: 'white'}}
                            style={styles.input}
                            placeholder='Tipo'
                            onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}
                            selectedValue={this.state.type}>
                            <Picker.Item label="Receita" value="Receita" />
                            <Picker.Item label="Despesa" value="Despesa" />
                        </Picker>
                        </View>
                        <View style={styles.line}/>
                    </View>
                    <View style={styles.view}>
                        <View style={styles.form}>
                            <Picker
                                textStyle={{color: 'white'}}
                                style={styles.input}
                                placeholder='Categoria'
                                onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue}) }
                                selectedValue={this.state.category}>
                                <Picker.Item label="Salário" value="Salário" />
                                <Picker.Item label="Bônus" value="Bônus" />
                                <Picker.Item label="Hora extra" value="Hora extra" />
                                <Picker.Item label="Gasolina" value="Gasolina" />
                                <Picker.Item label="Gastos de moradia" value="Gastos de moradia" />
                                <Picker.Item label="Transporte" value="Transporte" />
                                <Picker.Item label="Outros" value="Outros" />
                            </Picker>
                        </View>
                        <View style={styles.line}/>
                    </View>
                </View>  

                <View style={styles.sessionButton}>
                    <TouchableOpacity style={[styles.buttonGradient, shadowStyle]} onPress={() => this.insertAttempt()}>
                            <Text style={styles.textButton}>Adicionar</Text>
                    </TouchableOpacity>
                </View>  
            </View>
        );
    }
}
