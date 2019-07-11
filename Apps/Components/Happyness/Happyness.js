import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import Speedometer from 'react-native-speedometer-chart';
import Config from '../../Config'

export default class Happyness extends Component {

    constructor(props) {
        super(props);
        this.state = {
            happyness: []

        }
    }
    componentDidMount() {
        this.fetchHappyness()
    }

    fetchHappyness() {
        axios(`${Config.url}/transactions/transaction_two`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data.user_happiness)
            this.setState({ happyness: response.data.user_happiness })
        }).catch((error) => {
            console.log(response)
        })
    }
    render() {
        const { happyness } = this.state
        console.log("1",Object.keys(happyness))
        return (
            <View style={styles.container}>
                <Topbar
                    iconColor={colors.timRed}
                    backPressed={() => {
                        Actions.pop();
                    }}
                    screenName='Transactions' />
                <View style={{ marginTop: 100 }}>
                    <Text style={{ color: colors.heartRed, fontSize: 20, fontWeight: '500', marginTop: 30 }}>Happyness Meters</Text>
                </View>
                <View style={{ width: '100%', marginTop: 100, justifyContent: 'space-around', alignItems: 'center' }}>

                    <View style={{ width: '100%',alignItems:'center' }}>
                        <FlatList
                            data={happyness}
                            renderItem={({ item: rowData, index }) => {
                                return (
                                    <Speedometer
                                        value={rowData["John"] ? rowData["John"] : rowData["Luke"]}
                                        totalValue={100}
                                        size={250}
                                        outerColor="#d3d3d3"
                                        // internalColor="#ff0000"
                                        showText
                                        text={Object.keys(rowData)[0]}
                                        textStyle={{ color: 'blue' }}
                                        showLabels
                                        labelStyle={{ color: 'blue' }}
                                        showPercent
                                        showIndicator
                                        percentStyle={{ color: 'green' }}
                                    />
                                )
                            }}
                            keyExtractor={(item, index) => index}
                            style={{ marginTop: 5 }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}