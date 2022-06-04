import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import hexagon from '../assets/images/hexagons.png'
import time1 from '../assets/images/EDW.png'
import time2 from '../assets/images/png-akiha.png'
import votacaoStyles from '../styles/votacaoStyles'
import mainHeader from '../styles/mainHeaderStyles'

import coin from '../assets/images/gcupmoedas.png'
import userImage from '../assets/images/account.png'

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
               <View style={mainHeader.mainHeader}>
                    <View style={mainHeader.container}>
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
               <Text style={[votacaoStyles.copyright]}>© 2022 Copyright: Inexorabilis Team</Text>
          </View>
     )
}