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

     let nextGame
     
     let redTeam
     let blueTeam
     
     let redSideContVote
     let blueSideContVote
     let voteTotal
     let blueSidePercentVote
     let redSidePercentVote
     let diaAtual = new Date()
     let index

     const callEverything = () => {
          console.log(nextGame, diaAtual)
          redTeam = `#GO${teams[0].find((vermelho) => {return vermelho.id_equipe == nextGame.id_equipe_1}).tag}`
          blueTeam =  `#GO${teams[0].find((azul) => {return azul.id_equipe == nextGame.id_equipe_2}).tag}`
          console.log(redTeam, blueTeam)
          redSideContVote = votos[0].find((partida) => {return partida.id_partida == nextGame.id_partida}).quantia_total_votos_vermelho
          blueSideContVote = votos[0].find((partida) => {return partida.id_partida == nextGame.id_partida}).quantia_total_votos_azul
          voteTotal = redSideContVote + blueSideContVote
          blueSidePercentVote = Math.round((blueSideContVote / voteTotal) * 100)
          redSidePercentVote = Math.round((redSideContVote / voteTotal) * 100)
     }

     function findClosestPrevDate(arr,target){
          let targetDate = new Date(target);
          let previousDates = arr.filter(e => ( targetDate  - new Date(e)) > 0)
          let sortedPreviousDates =  previousDates.filter((a,b) => new Date(a) - new Date(b))
          return sortedPreviousDates[0] || null
     }




     if(games[0] != undefined){
          
          try{
               let arr = []
               console.log('1: ' + games)
               console.log('2: ' + games[0])
               console.log('3: ' + games[0][0])
               console.log('4: ' + games[0][0][1])
               console.log('5 : ' + games[0][0][3].data_jogo)
               for(let i=0; i<games[0][0].length;i++){
                    arr.push(games[0][0][i].data_jogo)
               }
               console.log(arr)
               index = findClosestPrevDate(arr, `${diaAtual.getFullYear()}-${diaAtual.getMonth}-${diaAtual.getDate}`)
               console.log(index)
          }catch(error){
               console.log(error)
          }
          
        callEverything()

        return (
               <View style={votacaoStyles.container}>
                    <Header border={true}/>
                    <VotingPage></VotingPage>
                    <Copyright/>
               </View>
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
     

