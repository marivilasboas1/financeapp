import React, { Component } from 'react';
import { Text, View , Image } from 'react-native';
import styles from './TransationDebitStyle';
import {Left, Body, Right, ListItem} from 'native-base' ;

class TransationDebit extends Component {

  constructor(props) {
      super(props);
  }

  titleTransaction = () => {
    let title = this.props.data.title;
    return title;
  }

  valueTransaction = () => {
    let value = this.props.data.value;
    return "R$ "+value;
  }

  categoryTransaction = () => {
    let category = this.props.data.category;
    return category;
  }

  render() {
    return (
      
        <View style={styles.container}>
            <View style={styles.block}>
                <ListItem avatar noBorder>
                    <Left>
                        <Image source={require('../../../../assets/images/shape_debit.png')} />
                    </Left>
                    <Body>
                        <Text style={styles.title}>
                            {this.titleTransaction()}
                        </Text>
                    </Body>
                    <Right>
                        <Text style={styles.value}>
                            {this.valueTransaction()}
                        </Text>
                        <Text style={styles.category}>
                            {this.categoryTransaction()}
                        </Text>
                    </Right>
                </ListItem>
            </View>
        </View>
    );
  }
};

export default TransationDebit;