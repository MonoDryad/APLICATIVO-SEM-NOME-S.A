import React, {useState} from 'react'
import {View, Image, Text} from 'react-native'
import mainHeader from '../styles/userheader'
import Icons from 'react-native-vector-icons/MaterialIcons';

import { loggedUser } from '../pages/Login'

export default function Header(prop){
    let borderColor
    let borderWidth


    if(prop.border == true){
        borderColor = '#ffd200'
        borderWidth = 1
    }else{
        borderColor = null
        borderWidth = 0
    }

    console.log(loggedUser[0].moeda, loggedUser[0].nome)
    

    return(
        <View style={{paddingLeft: 10, paddingRight: 10, backgroundColor:'#121212',paddingTop: 25, flexDirection: 'row',borderBottomColor: borderColor, borderBottomWidth: borderWidth, width: '100%'}}>
            <View style={[{marginBottom: 10,},mainHeader.container]}>
                <View style={mainHeader.coinView}>
                    <Icons style={mainHeader.userImage} name="currency-btc" size={32} color="#ffd200"/>
                    <Text style={mainHeader.coinText}>{loggedUser[0].moeda}</Text>
                </View>
                <View style={mainHeader.userView}>
                    <Icons style={mainHeader.userImage} name="account-circle" size={32} color="#ffd200"/>
                    <Text style={mainHeader.userText}>{loggedUser[0].nome}</Text>
                </View>
            </View>
        </View>
    )
}
