import React from 'react'
import styles from '../styles/home'
import {Image, Text, ScrollView ,View, TouchableOpacity } from 'react-native'

import time1 from '../assets/images/EDW.png'
import time2 from '../assets/images/png-akiha.png'
import noticiaImage from '../assets/images/aviso.png'

import Header from '../component/UserHeader'
import Copyright from '../component/Copyright'

import VotingPage from '../component/votingPage'

import globalPage from '../styles/globalPage'
import { games, loggedUser, teams, votos } from '../pages/Login'

function Home ({navigation}){

    let tabelaFase = 'Octogonal'
    let gaiacupEdicao = 'Quarta Edição'
    if( games[0] === undefined){
        return(
            <View style={[globalPage.pageColor, globalPage.pageContainer]}>
                <ScrollView>
                    <Header border={true}/>
                    <View style={{flex: 1, alignItems: 'center',alignContent: 'center', justifyContent: 'center', marginTop: '50%', marginBottom: '45%'}}>
                        <Text style={{fontSize: 24, color: "white"}}>Não há jogos marcados, </Text>
                        <Text style={{fontSize: 24, color: "white", width:'80%'}}>visite as <Text style={{color:'#ffd200', fontSize: 24}}>notícias</Text> para ver o que vêm por ai.</Text>
                    </View>
                    <Copyright/>
                </ScrollView>
            </View>
        )
    }else{
        return (
            <ScrollView>
            <View style={[globalPage.pageColor, globalPage.pageContainer]}>
                <Header border={true}/>
                <Text style={{fontSize: 32, color: 'white', fontWeight:'bold', marginBottom: 30, marginTop: 30}}>Bem-vindo <Text style={{color: '#ffd200', fontWeight:'bold'}}>{loggedUser[0].nome}</Text></Text>
                <VotingPage identificador='1' next='0'/>
                <View style={styles.tabelaView}>
                    <View style={styles.tabelaTitleView}>

                        <TouchableOpacity onPress={() => navigation.navigate('Tabela')}>
                            <Text style={styles.tabelaTitleText}>A tabela da {gaiacupEdicao}</Text>
                            <Text style={styles.tabelaSubTitleText}>Fase {tabelaFase} -
                            <Text style={[styles.tabelaSubTitleText,globalPage.yellowColor]}> Veja mais!</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabelaTimeSpacing}>
                        <View style={styles.tabelaTimeView}>
                            <Text style={styles.teamNameTabela}>1º</Text>
                            <Image style={styles.teamLogoImage} source={time2}/>
                            <View>
                                <Text style={styles.teamNameTabela}>NEO Akihabara</Text>
                                <Text style={styles.teamSiglaTabela}>#GOAKH</Text>
                            </View>
                        </View>
                        <View style={styles.tabelaTimeView}>
                            <Text style={styles.teamNameTabela}>2º</Text>
                            <Image style={styles.teamLogoImage} source={time1}/>
                            <View>
                                <Text style={styles.teamNameTabela}>Eight Divine Ways</Text>
                                <Text style={styles.teamSiglaTabela}>#GOEDW</Text>
                            </View>
                        </View>
                        <View style={styles.tabelaTimeView}>
                            <Text style={styles.teamNameTabela}>3º</Text>
                            <Image style={styles.teamLogoImage} source={time1}/>
                            <View>
                                <Text style={styles.teamNameTabela}>Eight Divine Ways Black</Text>
                                <Text style={styles.teamSiglaTabela}>#GOEDWB</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.noticiasMainView}>
                    <Text style={styles.noticiasTitleText}>Notícias</Text>
                    <View style={styles.noticiasSubView}>
                        <TouchableOpacity>
                            <View styles={styles.noticiaView}>
                                <Image style={styles.imageNoticia} source={noticiaImage}/>
                                <Text style={styles.textNoticia}>Personagem desabilitado</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 10}}>
                            <View styles={styles.noticiaView}>
                                <Image style={styles.imageNoticia} source={noticiaImage}/>
                                <Text style={styles.textNoticia}>Jogador Banido</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Copyright/>
            </View>
        </ScrollView>
        )
    }
}

export default Home