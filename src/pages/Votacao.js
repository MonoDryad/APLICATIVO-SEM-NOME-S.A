import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import hexagon from '../assets/images/hexagons.png'
import time1 from '../assets/images/EDW.png'
import time2 from '../assets/images/png-akiha.png'

import votacaoStyles from '../styles/votacao'

import Header from '../component/UserHeader'
import Copyright from '../component/Copyright'

export default function Votacao({ navigation }){

     let redTeam = '#GOEDW'
     let blueTeam =  '#GOOKO'

     let redSideContVote = 200
     let blueSideContVote = 550
     let voteTotal = redSideContVote + blueSideContVote
     let blueSidePercentVote = Math.round((blueSideContVote / voteTotal) * 100)
     let redSidePercentVote = Math.round((redSideContVote / voteTotal) * 100)

     return (
          <View style={votacaoStyles.container}>
               <Header border={true}/>
               <View style={{width: '100%', borderBottomColor: '#ffd200', borderBottomWidth: 1,}}>
                    <View style={votacaoStyles.mid}>
                         <Text style={votacaoStyles.titulo}>EDW vs OKM</Text>
                         <View style={votacaoStyles.votacao}>
                              <View>
                                   <TouchableOpacity style={{alignItems: 'center'}}>
                                        <Image source={time1} style={votacaoStyles.time1}></Image>
                                        <Text style={votacaoStyles.botaoA}>Votar</Text>
                                   </TouchableOpacity>
                              </View>
                              <View>
                                   <Text style={votacaoStyles.vs}>VS</Text>
                              </View>
                              <View>
                                   <TouchableOpacity style={{alignItems: 'center'}}>
                                        <Image source={time2} style={votacaoStyles.time2}></Image>
                                        <Text style={votacaoStyles.botaoV}>Votar</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                         <View style={votacaoStyles.mainVotingView}>
                              <View style={votacaoStyles.votingCounts}>
                                   <View style={votacaoStyles.viewVotingCounts}>
                                        <Text style={[votacaoStyles.whiteColor, votacaoStyles.percentageVotingCount]}>{blueSidePercentVote}%</Text>
                                        <Text style={[votacaoStyles.grayVotingColor]}>{blueSideContVote}</Text>
                                   </View>
                                   <View style={votacaoStyles.viewVotingCounts}>
                                        <Text style={[votacaoStyles.grayVotingColor]}>{redSideContVote}</Text>
                                        <Text style={[votacaoStyles.whiteColor, votacaoStyles.percentageVotingCount]}>{redSidePercentVote}%</Text>
                                   </View>
                              </View>
                              <View style={votacaoStyles.mySliderView}>
                                   <View style={{borderBottomRightRadius: 0, borderTopRightRadius: 0,borderRadius: 1000, height: 30 ,width: `${blueSidePercentVote}%`,backgroundColor: '#269aff'}}>
                                   </View>
                              </View>
                              <View style={votacaoStyles.separateVotingTeams}>
                                   <Text style={votacaoStyles.percentageVotingCount}>{blueTeam}</Text>
                                   <Text style={votacaoStyles.percentageVotingCount}>{redTeam}</Text>
                              </View>
                         </View>
                    </View>
               </View>
               <Copyright/>
          </View>
     )
}