import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';

export default class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            password: '',
            happy: true,
            neutral: false,
            sad: false
        }
    }
    renderSmilePress() {
        this.setState({
            happy: true,
            neutral: false,
            sad: false
        })
    }
    renderNeutralPress() {
        this.setState({
            happy: false,
            neutral: true,
            sad: false
        })
    }
    renderSadPress() {
        this.setState({
            happy: false,
            neutral: false,
            sad: true
        })
    }

    render() {
        const { username } = this.props

        return (
            <View style={styles.container}>
                <Topbar
                    iconColor={colors.timRed}
                    backPressed={() => {
                        Actions.pop();
                    }}
                    screenName='Review' />
                <View style={{ marginTop: 100, alignItems: 'center' }}>
                    <Text style={{ color: colors.heartRed, fontSize: 20, fontWeight: '500', marginTop: 30 }}>Thankyou!</Text>
                    <Text style={{ color: colors.textGray, fontSize: 14, fontWeight: '300', marginTop: 5 }}>Your Transaction was successful.</Text>
                    <Text style={{ color: colors.textGray, fontSize: 14, fontWeight: '300', marginTop: 30 }}>Please Share you experience being here.</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 100, justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => this.renderSmilePress()}>
                        <FontAwesome name="smile-o" color={this.state.happy ? colors.successGreen : colors.darkGrey} size={50} style={{ opacity: 1 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => this.renderNeutralPress()}>
                        <Entypo name="emoji-neutral" color={this.state.neutral ? colors.yellow : colors.darkGrey} size={50} style={{ opacity: 1, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => this.renderSadPress()}>
                        <Ionicons name="md-sad" color={this.state.sad ? colors.heartRed : colors.darkGrey} size={50} style={{ opacity: 1, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 50 }}>
                    <TouchableOpacity style={styles.roundButton} onPress={() => Actions.login()}>
                        <Text style={{ color: 'white' }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}