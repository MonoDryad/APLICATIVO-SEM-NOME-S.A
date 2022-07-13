import React, {useState} from 'react'
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native'
import mainHeader from '../styles/userheader'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { loggedUser } from '../pages/Login'

import { windowHeight, windowWidth } from '../../App';

export default function Header(prop){
    let borderColor
    let borderWidth

    const navigation = useNavigation();

    if(prop.border == true){
        borderColor = '#ffd200'
        borderWidth = 1
    }else{
        borderColor = null
        borderWidth = 0
    }

    console.log(loggedUser[0].moeda, loggedUser[0].nome)

    const [userOptionIcon, setUserOptionIcon] = useState('menu-left')   

    return(
        <View style={{paddingLeft: 20, paddingRight: 20, backgroundColor:'#121212',paddingTop: 25, flexDirection: 'row',borderBottomColor: borderColor, borderBottomWidth: borderWidth, width: windowWidth}}>
            <View style={[{marginBottom: 10,},mainHeader.container]}>
                <View style={mainHeader.coinView}>
                    <Icons style={mainHeader.userImage} name="alpha-g-circle-outline" size={32} color="#ffd200"/>
                    <Text style={mainHeader.coinText}>{loggedUser[0].moeda}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={() => navigation.navigate('TabelaRouter', {screen: 'UserConfig'})} >
                        <View style={[{borderBottomWidth: 1, borderColor: '#fff'}, mainHeader.userView]}>
                            <Icons style={mainHeader.userImage} name="account-circle" size={32} color="#ffd200"/>
                            <Text style={mainHeader.userText}>{loggedUser[0].nome}</Text>
                            <Icons name={userOptionIcon} color='#ffd200' size={32}/>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}