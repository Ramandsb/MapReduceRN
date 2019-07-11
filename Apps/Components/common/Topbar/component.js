import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { Ionicons, Entypo, FontAwesome5, FontAwesome, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default class Topbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }

    }
    componentDidMount() {
    }



    render() {

        const { iconColor, backPressed, screenName } = this.props


        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    {backPressed ? <TouchableOpacity style={{ zIndex: 30, position: 'absolute', left: 10 }} onPress={backPressed}>
                        <MaterialIcons name="arrow-back" size={28} color={iconColor} />
                    </TouchableOpacity> : null}
                    <Text style={{ fontSize: 16, fontWeight: '500', color: iconColor, }}>{screenName}</Text>
                </View>
            </View>
        );
    }
}
Topbar.protoTypes = {
    iconColor: PropTypes.string,
    backPressed: PropTypes.func,
    screenName: PropTypes.string.isRequired,

};


