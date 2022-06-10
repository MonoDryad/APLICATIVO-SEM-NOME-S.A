import React from 'react'
import {View, Image, Text} from 'react-native'
import globalPage from '../styles/globalPage'

export default function Copyright(prop){
    const data = new Date()
    let ano = data.getFullYear()

    return(
        <View style={[globalPage.pageContainer,{paddingLeft: 10, paddingRight: 10,paddingTop: 25, flexDirection: 'row', width: '100%'}]}>
            <Text style={globalPage.whiteColor}>©{ano}: Inexorabilis Team</Text>
        </View>
    )
}