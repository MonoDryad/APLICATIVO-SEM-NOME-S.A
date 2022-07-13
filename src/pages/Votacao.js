import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import hexagon from '../assets/images/hexagons.png'
import time1 from '../assets/images/EDW.png'
import time2 from '../assets/images/png-akiha.png'

import votacaoStyles from '../styles/votacao'

import Header from '../component/UserHeader'
import Copyright from '../component/Copyright'
import globalPage from '../styles/globalPage';
import VotingPage from '../component/votingPage'

import { games, teams, votos } from '../pages/Login'

export default function Votacao({ navigation }){
     if(games[0] != undefined){


        return (
          <ScrollView>
               <View style={votacaoStyles.container}>
                    <Header border={true}/>
                    <VotingPage identificador='0' next='0'></VotingPage>
                    <VotingPage identificador='0' next='1'></VotingPage>
                    <Copyright/>
               </View>
          </ScrollView>
          )
     } else{
          return(
               <View style={[globalPage.pageColor, globalPage.pageContainer]}>
                   <ScrollView>
                       <Header border={true}/>
                       <View style={{flex: 1, alignItems: 'center',alignContent: 'center', justifyContent: 'center', marginTop: '50%', marginBottom: '45%'}}>
                           <Text style={{fontSize: 24, color: "white"}}>Não há jogos marcados para votar, </Text>
                           <Text style={{fontSize: 24, color: "white", width:'80%'}}>visite as <Text style={{color:'#ffd200', fontSize: 24}}>notícias</Text> para ver o que vêm por ai.</Text>
                       </View>
                       <Copyright/>
                   </ScrollView>
               </View>
           )
     }
}
     

