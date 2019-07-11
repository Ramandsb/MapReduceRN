import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, FlatList } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import { FontAwesome ,Ionicons,Entypo} from '@expo/vector-icons';
import moment from 'moment'
import Config from '../../Config'
export default class AllTransactions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }
    componentDidMount() {
        this.fetchAllTransactions()
    }
    fetchAllTransactions() {
        axios(`${Config.url}/transactions`, {
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

    renderItem(rowData) {
        const name = rowData.user_id === 1 ? "John" : "Luke"
        {
            return (
                <TouchableWithoutFeedback style={{ alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%', borderBottomColor: colors.lightGrayLable, borderBottomWidth: 2 }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }}>
                       { 
                           rowData && rowData.merchant === 'Starbucks' ? 
                           <Image source={require('../../assets/images/starbucks.png')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                            :
                            <Image source={require('../../assets/images/tim.png')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                       }
                        <View>
                            <Text style={{ color: colors.textGray, fontSize: 12, marginLeft: 10,fontWeight:'300' }}>{moment(rowData.date).format("ddd, MMM Do YYYY")}</Text>
                            <Text style={{ color: colors.darkBlue, fontSize: 16, marginLeft: 10,fontWeight:'500',marginTop:5 }}>{name}</Text>
                            <Text style={{ color: colors.darkBlue, fontSize: 14, marginLeft: 10,fontWeight:'300',marginTop:5 }}>{rowData.merchant}</Text>
                            <Text style={{ color: colors.darkBlue, fontSize: 13, marginLeft: 10 ,marginTop:5}}>${rowData.amount}</Text>
                      </View>
                      <View style={{position:'absolute',right:20}}>
                          {
                              rowData.reflected === "GOOD" ?
                               <FontAwesome name="smile-o" color={colors.successGreen} size={27} style={{ opacity: 1}} /> 
                                :
                                rowData.reflected === "BAD" ?
                                <Ionicons name="md-sad" color={colors.heartRed} size={27} style={{ opacity: 1,  }} /> 
                                :
                                <Entypo name="emoji-neutral" color={colors.yellow} size={27} style={{ opacity: 1,  }} /> 

                          }
                      </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <Topbar
                    iconColor={colors.timRed}
                    backPressed={() => {
                        Actions.pop();
                    }}
                    screenName='All Transactions' />
                <View style={{ width: '100%', flex: 1, marginTop: 80 }}>
                    <FlatList
                        data={this.state.transactions}
                        renderItem={({ item: rowData, index }) => this.renderItem(rowData)}
                        keyExtractor={(item, index) => index}
                        style={{ marginTop: 5 }}
                    />
                </View>
            </View>
        )
    }
}