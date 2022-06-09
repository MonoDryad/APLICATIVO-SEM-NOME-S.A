import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native"
import styles from "../styles/CronoStyles.js"
import hexagon from '../assets/images/hexagons.png'
import timeAzul from "../assets/images/EDW.png"
import timeVermelho from "../assets/images/png-akiha.png"
import mainHeader from '../styles/mainHeaderStyles'
import coin from '../assets/images/gcupmoedas.png'
import userImage from '../assets/images/account.png'

const Cronograma = () => {
    return (
        <View style={styles.container}>
            <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon} />
            <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon} />
            <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon} />

            <View style={{paddingLeft: 10, paddingRight: 10, backgroundColor:'#121212',marginTop: 25, flexDirection: 'row',borderBottomColor: '#ffd200', borderBottomWidth: 1,}}>
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
            
            <View style={styles.horario}>
                <View style={styles.insideHorario}> 
                    <Text style={styles.whiteFont}>Aprox.  </Text>
                    <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                    <Text style={styles.whiteFont}>20/05 </Text>
                    <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>
            <View style={styles.horario}>
                <View style={styles.insideHorario}> 
                    <Text style={styles.whiteFont}>Aprox.  </Text>
                    <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                    <Text style={styles.whiteFont}>20/05 </Text>
                    <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>
            <View style={styles.horario}>
                <View style={styles.insideHorario}> 
                    <Text style={styles.whiteFont}>Aprox.  </Text>
                    <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                    <Text style={styles.whiteFont}>20/05 </Text>
                    <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>
            <View style={styles.horario}>
                <View style={styles.insideHorario}> 
                    <Text style={styles.whiteFont}>Aprox.  </Text>
                    <Text style={[styles.whiteFont, ]}>19h </Text>
                </View>
                <View style={styles.insideHorario}>
                    <Text style={styles.whiteFont}>20/05 </Text>
                    <Text style={[styles.whiteFont, ]}>MDI</Text>
                </View>
                <Image style={[styles.timeAzul]} source={timeAzul}></Image>
                <Text style={[styles.whiteFont, styles.timeFonte]}> EDW </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> VS </Text>
                <Text style={[styles.whiteFont, styles.timeFonte]}> OKO </Text>
                <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
            </View>
        </View>
    )
}


export default Cronograma
