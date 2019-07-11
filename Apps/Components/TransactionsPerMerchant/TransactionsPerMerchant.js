import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import Config from '../../Config'

export default class TransactionsPerMerchant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions:{}

        }
    }
    componentDidMount() {
        this.fetchTransactions()
    }

    fetchTransactions() {
        axios(`${Config.url}/transactions/transaction_one`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response)
            this.setState({ transactions: response.data })
        }).catch((error) => {
            console.log(response)
        })
    }
    render() {
        const { transactions } = this.state
        return (
            <View style={styles.container}>
                <Topbar
                    iconColor={colors.timRed}
                    backPressed={() => {
                        Actions.pop();
                    }}
                    screenName='Transactions' />
                <View style={{ marginTop: 100 }}>
                    <Text style={{ color: colors.heartRed, fontSize: 20, fontWeight: '500', marginTop: 30 }}>Transactions per merchant</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 100, justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ borderRadius: 20,alignItems:'center' }}>
                        <Image style={{ width: 130, height: 130, borderRadius: 20, }} source={require('../../assets/images/starbucks.png')} />
                        <Text style={{color:colors.starbucksGreen,fontSize:18,fontWeight:'500'}}>{transactions["Starbucks"]}</Text>
                    </View>
                    <View style={{ borderRadius: 20 ,alignItems:'center'}}>
                        <Image style={{ width: 130, height: 130, borderRadius: 20, }} source={require('../../assets/images/tim.png')} />
                        <Text style={{color:colors.timRed,fontSize:18,fontWeight:'500'}}>{transactions["Tim Hortons"]}</Text>
                    </View>
                </View>
            </View>
        )
    }
}