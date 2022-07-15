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
                <Copyright/>
            </View>
        </ScrollView>
        )
    }
}

export default Home