import React, {Component} from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import {Header, Title, Left, Right, Button, Icon} from 'native-base' ;
import {Actions} from 'react-native-router-flux';
import styles from './TransationStyle';
import TransationCredit from '../components/trasationcredit/TransationCredit'
import TransationDebit from '../components/transtiondebit/TransationDebit'

import constantsAPI from '../../../constantsApi/ConstantsApi';

export default class TransationScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        AsyncStorage.getItem("id").then((id) => {

                let colletion = {}
                colletion.id = id;
                colletion.typeList = this.props.typeList;
                const json = JSON.stringify(colletion);

                let url = constantsAPI.BASE_URL+constantsAPI.READ_DATA_TRANSACTIONS;

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
                       
                    console.log('transations_log_api:');
                    console.log(response.transactions);

                    let state = this.state;
                    state.list = response.transactions;
                    this.setState(state);
                    
                })
                .catch(() => {


                })
                .done()
        });
    }

    backDashboard = () => {
        return Actions.pop();
    }
    
    render(){

        console.disableYellowBox = true;

        if (this.props.typeList === 'Receita'){

            return (
                <View style={styles.container}>
                    <Header style={styles.header}> 
                    <Left>
                        <Button transparent onPress={() => this.backDashboard()}>
                        <Icon style={{color: '#FFFFFF'}} name="arrow-back"/>
                        </Button>
                    </Left>
                        <Title style={styles.titleHeader}>Transações</Title>
                        <Right/>
                    </Header>
    
                    <View style={styles.flatListRow}>     
    
                        <FlatList
                            data={this.state.list}
                            renderItem={({ item }) => <TransationCredit data={item} />}
                            keyExtractor={(item) => item.id.toString()}
                        />
    
                    </View>
    
                </View>
            );

        }else{

            return (
                <View style={styles.container}>
                    <Header style={styles.header}> 
                    <Left>
                        <Button transparent onPress={() => this.backDashboard()}>
                        <Icon style={{color: '#FFFFFF'}} name="arrow-back"/>
                        </Button>
                    </Left>
                        <Title style={styles.titleHeader}>Transações</Title>
                        <Right/>
                    </Header>
    
                    <View style={styles.flatListRow}>     
    
                        <FlatList
                            data={this.state.list}
                            renderItem={({ item }) => <TransationDebit data={item} />}
                            keyExtractor={(item) => item.id.toString()}
                        />
    
                    </View>
    
                </View>

            );
        }
        
    }
}

