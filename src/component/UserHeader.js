import React from 'react'
import {View, Image, Text} from 'react-native'
import mainHeader from '../styles/userheader'

import coin from '../assets/images/gcupmoedas.png'
import userImage from '../assets/images/account.png'

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

    return(
        <View style={{paddingLeft: 10, paddingRight: 10, backgroundColor:'#121212',paddingTop: 25, flexDirection: 'row',borderBottomColor: borderColor, borderBottomWidth: borderWidth, width: '100%'}}>
            <View style={[{marginBottom: 10,},mainHeader.container]}>
                <View style={mainHeader.coinView}>
                    <Image style={mainHeader.coinImage} source={coin}/>
                    <Text style={mainHeader.coinText}>0</Text>
                </View>
                <View style={mainHeader.userView}>
                    <Image style={mainHeader.userImage} source={userImage}/>
                    <Text style={mainHeader.userText}>Usuário</Text>
                </View>
            </View>
        </View>
    )
}
