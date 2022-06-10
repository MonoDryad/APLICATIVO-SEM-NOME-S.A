import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native"
import styles from "../styles/crono"
import hexagon from '../assets/images/hexagons.png'
import timeAzul from "../assets/images/EDW.png"
import timeVermelho from "../assets/images/png-akiha.png"

import Header from '../component/UserHeader'
import Copyright from '../component/Copyright'

const Cronograma = () => {
    return (
        <View style={styles.container}>
            <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon} />
            <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon} />
            <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon} />

            <Header border={true}/>
            
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
            <Copyright/>
        </View>
    )
}


export default Cronograma
