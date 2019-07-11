import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

export default class DisplayResult extends Component {

    constructor(props) {
        super(props);
        this.state = {

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
                    screenName='Transactions' />
                <View style={{ marginTop: 130, width: '100%', }}>
                    <TouchableWithoutFeedback style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }} onPress={() => Actions.alltransactions()}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }}>
                            <Text style={{ color: colors.darkBlue, fontSize: 13 }}>All Transactions</Text>
                            <FontAwesome name="angle-right" color={colors.darkBlue} size={27} style={{ opacity: 1 }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }} onPress={() => Actions.transactionspermerchant()}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }}>
                            <Text style={{ color: colors.darkBlue, fontSize: 13 }}>Transactions per merchant</Text>
                            <FontAwesome name="angle-right" color={colors.darkBlue} size={27} style={{ opacity: 1 }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }} onPress={() => Actions.happyness()}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10, width: '100%' }}>
                            <Text style={{ color: colors.darkBlue, fontSize: 13 }}>Happyness meter</Text>
                            <FontAwesome name="angle-right" color={colors.darkBlue} size={27} style={{ opacity: 1 }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}