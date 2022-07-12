import React, {useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import votacaoStyles from '../styles/votacao'
import styles from '../styles/votacao'
import globalPage from '../styles/globalPage'
import { games, teams, votos } from '../pages/Login'
// import { bigInfoTeamArray } from './teamLogic'
import images from './images'


export default function VotingPome({navigation}, props) {
    console.log(games == undefined, games[0] == undefined)
    console.log('teste: ' + teams)
    if( games != undefined){
        let nextGame

        let redTeam
        let blueTeam
    
        let redSideContVote
        let blueSideContVote
        let voteTotal
        let blueSidePercentVote
        let redSidePercentVote
        let logoAzul
        let logoVermelho

        let fullBlueTeam
        let fullRedTeam
    
        let diaAtual = new Date()
        try{
            nextGame =  games[0].reduce((a, b) => a.data_jogo - diaAtual.getDate() < b.data_jogo - diaAtual.getDate() ? a : b)
        }catch(error){
            console.log(error)
        }
    
        const callEverything = () => {
            console.log(nextGame, diaAtual)
            redTeam = `#GO${teams[0].find((vermelho) => {return vermelho.id_equipe == nextGame.id_equipe_1}).tag}`
            blueTeam =  `#GO${teams[0].find((azul) => {return azul.id_equipe == nextGame.id_equipe_2}).tag}`

            fullRedTeam = teams[0].find((vermelho) => {return vermelho.id_equipe == nextGame.id_equipe_1}).tag
            fullBlueTeam = teams[0].find((azul) => {return azul.id_equipe == nextGame.id_equipe_2}).tag

            logoVermelho = teams[0].find((vermelho) => {return vermelho.id_equipe == nextGame.id_equipe_1}).id_equipe
            logoAzul =  teams[0].find((azul) => {return azul.id_equipe == nextGame.id_equipe_2}).id_equipe

            console.log(redTeam, blueTeam)
            redSideContVote = votos[0].find((partida) => {return partida.id_partida == nextGame.id_partida}).quantia_total_votos_vermelho
            blueSideContVote = votos[0].find((partida) => {return partida.id_partida == nextGame.id_partida}).quantia_total_votos_azul
            voteTotal = redSideContVote + blueSideContVote
            blueSidePercentVote = Math.round((blueSideContVote / voteTotal) * 100)
            redSidePercentVote = Math.round((redSideContVote / voteTotal) * 100)
        }
        
        callEverything()
        return(
            <View style={styles.votingView}>
                <Text style={votacaoStyles.titulo}>{fullBlueTeam} vs {fullRedTeam}</Text>
                <View style={votacaoStyles.votacao}>
                    <View>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                                <Image source={images(logoAzul)} style={votacaoStyles.time1}></Image>
                                <Text style={votacaoStyles.botaoA}>Votar</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={votacaoStyles.vs}>VS</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                                <Image source={images(logoVermelho)} style={votacaoStyles.time2}></Image>
                                <Text style={votacaoStyles.botaoV}>Votar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={[globalPage.whiteColor, styles.titulo]}>Participe da Votação</Text>
                    <View style={styles.mainVotingView}>
                        <View style={styles.votingCounts}>
                            <View style={styles.viewVotingCounts}>
                                <Text style={[globalPage.whiteColor, styles.percentageVotingCount]}>{blueSidePercentVote}%</Text>
                                <Text style={[styles.grayVotingColor]}>{blueSideContVote}</Text>
                            </View>
                            <View style={styles.viewVotingCounts}>
                                <Text style={[styles.grayVotingColor]}>{redSideContVote}</Text>
                                <Text style={[globalPage.whiteColor, styles.percentageVotingCount]}>{redSidePercentVote}%</Text>
                            </View>
                        </View>
                        <View style={styles.mySliderView}>
                            <View style={{borderBottomRightRadius: 0, borderTopRightRadius: 0,borderRadius: 1000, height: 30 ,width: `${blueSidePercentVote}%`,backgroundColor: '#269aff'}}>
                            </View>
                        </View>
                        <View style={styles.separateVotingTeams}>
                            <Text style={styles.percentageVotingCount}>{blueTeam}</Text>
                            <Text style={styles.percentageVotingCount}>{redTeam}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }else{
        return(<View></View>)
    }


}