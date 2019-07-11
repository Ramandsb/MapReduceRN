import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            password: ''
        }
    }

    renderLoginButton(){
        const { firstName } = this.state
        if(firstName.toLocaleLowerCase() === "john" || firstName.toLocaleLowerCase() === "luke"){
            Actions.choosemerchant({username:firstName})
        }else{
            alert("Only John and Luke are on the app right now.")
        }
        
    }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.main}>
                    <View style={{width:'100%',alignItems:'center',marginTop:50}}>
                            <Text style={{color:colors.darkBlue,fontSize:24,fontWeight:'500'}}>Welcome</Text>
                    </View>
                    <View style={{ width: '80%', marginTop: 150 }}>
                        <Text style={{ fontSize: 12, color: colors.darkBlue, fontWeight: '700' }}>Name</Text>
                        <View style={{ width: '100%', justifyContent: 'center', paddingTop: 15, paddingBottom: 5, borderBottomColor: colors.darkBlue, borderBottomWidth: 1 }} >
                            <TextInput
                                onChangeText={(text) => this.setState({ firstName: text })}
                                value={this.state.firstName}
                                style={{ marginLeft: 10, color: colors.darkBlue }} underlineColorAndroid='rgba(0,0,0,0)'
                            />
                        </View>
                    </View>
                    {/* <View style={{ width: '80%', marginTop: 20 }}>
                        <Text style={{ fontSize: 12, color: colors.darkBlue, fontWeight: '700' }}>Password</Text>
                        <View style={{ width: '100%', justifyContent: 'center', paddingTop: 15, paddingBottom: 5, borderBottomColor: colors.darkBlue, borderBottomWidth: 1 }} >
                            <TextInput
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                                secureTextEntry
                                style={{ marginLeft: 10, color: colors.darkBlue }} underlineColorAndroid='rgba(0,0,0,0)'
                            />
                        </View>
                    </View> */}
                    <View style={{width:'100%',alignItems:'center',marginTop:50}}>
                        <TouchableOpacity style={styles.roundButton} onPress={()=> this.renderLoginButton()}>
                            <Text style={{color:'white'}}>Login to buy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                        <TouchableOpacity style={styles.roundButton} onPress={()=> Actions.display()}>
                            <Text style={{color:'white'}}>See Results</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:'100%',alignItems:'center',marginTop:70}}>
                            <Text style={{fontSize:14,fontWeight:'500'}}>Only John and Luke are the users.</Text>
                    </View>
                </View>
            </View>
        )
    }
}