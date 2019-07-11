import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Login from './Apps/Components/Login/Login';
import ChooseMerchant from './Apps/Components/ChooseMerchant/ChooseMerchant';
import Transactions from './Apps/Components/Transactions/Transactions';
import DisplayResult from './Apps/Components/DisplayResult/DisplayResult';
import AllTransactions from './Apps/Components/AllTransactions/AllTransactions';
import TransactionsPerMerchant from './Apps/Components/TransactionsPerMerchant/TransactionsPerMerchant';
import Happyness from './Apps/Components/Happyness/Happyness';
import Review from './Apps/Components/Review/Review';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene  key="root">
            <Scene key="login" initial component={Login} hideNavBar type='reset'/>
            <Scene key="choosemerchant"  component={ChooseMerchant} hideNavBar  />
            <Scene key="transaction"  component={Transactions} hideNavBar />
            <Scene key="display"  component={DisplayResult} hideNavBar />
            <Scene key="alltransactions"  component={AllTransactions} hideNavBar />
            <Scene key="transactionspermerchant"  component={TransactionsPerMerchant} hideNavBar />
            <Scene key="happyness"  component={Happyness} hideNavBar />
            <Scene key="review"  component={Review} hideNavBar />



          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor:'#ffffff'
  },
});