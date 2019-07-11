import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
export default class ChooseMerchant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            password: ''
        }
    }

    render() {
        const {username} = this.props
        return (
            <View style={styles.container}>
                <View style={{marginTop:100}}>
                    <Text style={{ color: colors.heartRed, fontSize: 20, fontWeight: '500',marginTop:30 }}>Choose a merchant</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 100, justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 20 }} onPress={()=> Actions.transaction({merchant:'Starbucks',username:username})}>
                        <Image style={{ width: 130, height: 130, borderRadius: 20, }} source={require('../../assets/images/starbucks.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 20 }} onPress={()=> Actions.transaction({merchant:'Tim Hortons',username:username})}>
                        <Image style={{ width: 130, height: 130, borderRadius: 20, }} source={require('../../assets/images/tim.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}