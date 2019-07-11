import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import Topbar from '../common/Topbar'
import colors from '../../assets/colors'
import { Actions } from 'react-native-router-flux';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default class Transactions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            merchant: '',
            donutselected: false,
            cofeeselected: false,
            totalamount:0.00
        }
    }
    componentDidMount() {
        const { merchant } = this.props
        this.setState({ merchant })
    }
    handleCofeeAdd(){
        const {cofeeselected} = this.state
        if(!cofeeselected){
            this.setState({ cofeeselected: !this.state.cofeeselected })
            this.setState({totalamount:this.state.totalamount + 2.75})
        }else{
            this.setState({ cofeeselected: !this.state.cofeeselected })
            this.setState({totalamount:this.state.totalamount - 2.75})
        }
       
    }
    handleDonutAdd(){
        const { donutselected} = this.state
        if(!donutselected){
            this.setState({ donutselected: !this.state.donutselected })
            this.setState({totalamount:this.state.totalamount + 1.99})
        }else{
            this.setState({ donutselected: !this.state.donutselected })
            this.setState({totalamount:this.state.totalamount - 1.99})
        }
       
    }


    render() {
        const { merchant, username } = this.props
        const themeColor = this.state.merchant === "Starbucks" ? colors.starbucksGreen : colors.timRed
        return (
            <View style={styles.container}>
                <Topbar
                    iconColor={themeColor}
                    backPressed={() => {
                        Actions.pop();
                    }}
                    screenName='Transactions' />
                <ScrollView style={{ width: '100%', marginTop: 80 }}>
                    <View style={{ width: '100%', flex: 1, alignItems: 'center', marginTop: 50 }}>
                        {this.state.merchant === "Starbucks" ?
                            <Image style={{ width: 130, height: 130, borderRadius: 20, }} source={require('../../assets/images/starbucks.png')} />
                            :
                            <Image style={{ width: 130, height: 130, borderRadius: 20, }} source={require('../../assets/images/tim.png')} />
                        }
                        <Text style={{ fontSize: 18, color: themeColor, marginTop: 10, fontWeight: '500' }}>
                            Welcome to {merchant} {username}
                        </Text>
                        <Text style={{ marginTop: 5, fontSize: 14 }}>
                            What would you like to order today
                            </Text>
                        <View style={{ width: '100%', marginTop: 20 }}>
                            <Text style={{ color: colors.textGray, fontSize: 13, margin: 10 }}>
                                Menu
                                </Text>
                        </View>

                        <View style={{ width: '100%', marginTop: 20 ,padding:20,flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center' }} onPress={() => this.handleCofeeAdd()}>
                                <View>
                                    <Text style={{fontSize:18,fontWeight:'500',color:colors.darkBlue}}>
                                        Cofee
                                </Text>
                                <Text style={{fontSize:13,fontWeight:'300',marginTop:2}}>
                                        $2.75
                                </Text>
                                </View>
                                <View style={{ marginLeft: 50,justifyContent:'center',alignItems:'center' }}>
                                    {!this.state.cofeeselected ?
                                        <Ionicons name="ios-add" color={colors.skyBlue} size={27} style={{ opacity: 1 }} />
                                        :
                                        <MaterialIcons name="done" color={colors.successGreen} size={27} style={{ opacity: 1 }} />
                                    }
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center' }} onPress={() => this.handleDonutAdd()}>
                                <View>
                                    <Text style={{fontSize:18,fontWeight:'500',color:colors.darkBlue}}>
                                        Donut
                                </Text>
                                <Text style={{fontSize:13,fontWeight:'300',marginTop:2}}>
                                        $1.99
                                </Text>
                                </View>
                                <View style={{ marginLeft: 50,justifyContent:'center',alignItems:'center' }}>
                                    {!this.state.donutselected ?
                                        <Ionicons name="ios-add" color={colors.skyBlue} size={27} style={{ opacity: 1 }} />
                                        :
                                        <MaterialIcons name="done" color={colors.successGreen} size={27} style={{ opacity: 1 }} />
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Text style={{fontSize:16}}>
                                Total amount $
                            </Text>
                            <Text style={{fontSize:16}}>
                                {this.state.totalamount}
                            </Text>
                        </View>

                    </View>
                    <View style={{width:'100%',alignItems:'center',marginTop:50}}>
                        <TouchableOpacity style={[styles.roundButton,{backgroundColor:themeColor}]} onPress={()=> Actions.review()}>
                            <Text style={{color:'white'}}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}