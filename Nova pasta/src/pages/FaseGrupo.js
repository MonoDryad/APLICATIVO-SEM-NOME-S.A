import React, { useState } from "react"
import { View, Text, TextInput, Image, } from "react-native"
import styles from "../styles/fasegrupo"
import timeAzul from "../assets/images/EDW.png"
import timeVermelho from "../assets/images/png-akiha.png"
import ok from "../assets/images/times/ok.png"
import { ScrollView } from "react-native"
import PHOENIX from "../assets/images/times/PHOENIX.png"
import KNAVE  from  "../assets/images/times/KNAVE.png"
import NAOKI from "../assets/images/times/NAOKI.png"
import TEAM from "../assets/images/times/TEAM.png"
import DARKTENACITY from "../assets/images/times/DARKTENACITY.png"
import LOTUSVERMELHA from "../assets/images/times/LOTUSVERMELHA.png"


const FaseGrupo = ({ navigation }) => {
    console.log(props.title);
    const title = props.title !== undefined ? props.title : "FaseGrupo"

    return (
        <ScrollView>
            <View style={styles.container}>
                {/*mais uma div GRUPOOOOOOO*/}
                <View style={styles.grupoA}>

                    <View style={styles.Nomegrupos}>
                        <Text style={styles.grupo}>GRUPO A</Text>
                    </View>

                    {/* divisao 1*/}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>1º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={timeAzul}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>EIGHT DIVINE WAYS</Text>
                            </View>
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>4/0</Text>
                        </View>
                    </View>

                    {/* divisao 2 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>2º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={KNAVE}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>KNAVE FURY BLACK E-SPORT</Text>
                            </View>
                        
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>1/3</Text>
                        </View>
                    </View>

                    {/* divisao 3 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>3º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={PHOENIX}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>PHOENIX WARRIORS GAMING </Text>
                            </View>
                        
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>0/2</Text>
                        </View>
                    </View>
                </View>

                {/*mais uma div GRUPOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/}

                <View style={styles.grupoB}>

                    <View style={styles.Nomegrupos}>
                        <Text style={styles.grupo}>GRUPO B</Text>
                    </View>

                    {/* divisao 1*/}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>1º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={ok}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>ORANGE KINGDOM - OWARI</Text>
                            </View>
                         
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>5/1</Text>
                        </View>
                    </View>

                    {/* divisao 2 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>2º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={timeAzul}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>EIGHT DIVINE WAYS BLACK</Text>
                            </View>
                           
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>3/3</Text>
                        </View>
                    </View>

                    {/* divisao 3 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>3º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={NAOKI}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>NAOKI WHITE</Text>
                            </View>
                           
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>1/5</Text>
                        </View>
                    </View>
                </View>


                {/*mais uma div GRUPOOOOOOO*/}

                <View style={styles.grupoC}>

                    <View style={styles.Nomegrupos}>
                        <Text style={styles.grupo}>GRUPO C</Text>
                    </View>

                    {/* divisao 1*/}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>1º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={LOTUSVERMELHA}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>LOTUS GALAXY</Text>
                            </View>
                         
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>5/1</Text>
                        </View>
                    </View>

                    {/* divisao 2 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>2º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={ok}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>ORANGE KINGDOM - UMAYYAD </Text>
                            </View>
                        
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>3/3</Text>
                        </View>
                    </View>

                    {/* divisao 3 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>3º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={TEAM}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>TEAM NOWAY</Text>
                            </View>
                           
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>1/5</Text>
                        </View>
                    </View>
                </View>

                {/*mais uma div GRUPOOOOOOO*/}

                <View style={styles.grupoD}>

                    <View style={styles.Nomegrupos}>
                        <Text style={styles.grupo}>GRUPO D</Text>
                    </View>

                    {/* divisao 1*/}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>1º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={timeVermelho}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>NEO AKIHABARA</Text>
                            </View>
                            
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>5/1</Text>
                        </View>
                    </View>

                    {/* divisao 2 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>2º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={ok}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>ORANGE KINGDOM MING</Text>
                            </View>
                        
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>3/3</Text>
                        </View>
                    </View>

                    {/* divisao 3 */}
                    <View style={styles.lugar}>
                        <View style={styles.div1}>
                            <Text style={styles.lugarTexto}>3º</Text>
                        </View>
                        <View style={styles.div2}>
                            <Image style={[styles.timeVermelho]} source={DARKTENACITY}></Image>
                        </View>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textoGrandeMeio}>DARK TENACITY</Text>
                            </View>
                            
                        </View>
                        <View style={styles.div4}>
                            <Text style={styles.textoFinal}>1/5</Text>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>

    )



}
export default FaseGrupo


