import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, AsyncStorage } from "react-native";
import { Header, Left, Right, Button, Icon, Title} from "native-base";
import constantsAPI from '../../../constantsApi/ConstantsApi';
import styles from './DashboardStyle';
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeList:'',
      recipe:'',
      expense:'',
      total:''
    };

    AsyncStorage.getItem("id").then((id) => {

      let colletion = {}
      colletion.id = id;
      const json = JSON.stringify(colletion);

      let url = constantsAPI.BASE_URL+constantsAPI.LOAD_DATA_DASHBOARD;

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
             
          console.log('dashboard_log_api:');
          console.log(response);

          this.setState({
            recipe: response.recipe,
          });

          this.setState({
            expense: response.expense,
          });

          this.setState({
            total: response.total,
          });
 
      })
      .catch(() => {
      })
      .done()
    });
  }
  openAdd = () => {
    return Actions.insert();
  }
  openTransationRecipe = () => {
    return Actions.transation({typeList: 'Receita'});
  }
  openTransationExpense = () => {
    return Actions.transation({typeList: 'Despesa'});
  }

  backLogin = () => {
    return Actions.pop();
  }


  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.root}>
        <Header style={styles.header}> 
          <Left>
            <Button transparent onPress={() => this.backLogin()}>
             <Icon style={{color: '#FFFFFF'}} name="arrow-back"/>
            </Button>
          </Left>
            <Title style={styles.title}>Dashboard</Title>
            <Right/>
        </Header>
        <View style={styles.painelTransation}>
          <Text style={styles.credito}>CRÉDITO</Text>
          <Text style={styles.ethereum}>Economias</Text>

          <TouchableOpacity style={styles.lineViewCredit} onPress={() => this.openTransationRecipe()}>
          <Text style={styles.vizualizar}>VIZUALIZAR</Text>
          </TouchableOpacity>

          <Text style={styles.debito}>DÉBITO</Text>
          <Text style={styles.bitcoinCash}>Despesas</Text>

          <TouchableOpacity style={styles.lineViewDebit} onPress={() => this.openTransationExpense()}>
            <Text style={styles.vizualizar1}>VIZUALIZAR</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.subtitle}>
          <Text style={styles.lancamentos}>LANÇAMENTOS:</Text>
        </View>
        <View style={styles.painelValue}>
          <Text style={styles.style}>{this.state.total} </Text>
          <Text style={styles.r}>R$</Text>
          <Text style={styles.r273992}>R$ {this.state.expense}</Text>
          <Text style={styles.despesas}>DESPESAS</Text>
          <Text style={styles.economia}>ECONOMIA</Text>
          <Text style={styles.r198038}>R$ {this.state.recipe}</Text>
        </View>
        <TouchableOpacity style={styles.add} onPress={() => this.openAdd()}>
          <Text style={styles.verTodos}>ADICIONAR</Text>
        </TouchableOpacity>

        <Image
          source={require('../../../assets/images/line.png')}
          style={styles.line}
        />
        <Image
          source={require('../../../assets/images/chart_debit.png')}
          style={styles.chartCredit}
        />
        <Image
          source={require('../../../assets/images/chart_credit.png')}
          style={styles.chartDebit}
        />
      </View>
    );
  }
}
