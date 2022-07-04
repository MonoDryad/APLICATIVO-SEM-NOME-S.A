import React, {useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import styles from '../styles/votacao'
import globalPage from '../styles/globalPage'

export default function VotingHome(prop) {
    
    let nextGame
    const [games, setGames] = useState([])

    const getGames = async () => {
        try{
            const response = await fetch('http://localhost:3000/gaiacup/partida')
            const data = response.json()
            data.then(
                (val) => setGames(val)
            )
        }catch(error){
            console.log(error)
        }
    }
    getGames()


    console.log(games)
    let diaAtual = new Date()
    nextGame = games.map(function (data){ return Math.abs(parseInt(data.data_jogo.substr(5, 7)) - diaAtual.getDate()) })
    console.log(nextGame)

    let redTeam = "nextGame[0].id_equipe_1"
    let blueTeam =  "nextGame[0].id_equipe_2"

    let redSideContVote = 200
    let blueSideContVote = 550
    let voteTotal = redSideContVote + blueSideContVote
    let blueSidePercentVote = Math.round((blueSideContVote / voteTotal) * 100)
    let redSidePercentVote = Math.round((redSideContVote / voteTotal) * 100)

    return(
        <View style={styles.votingView}>
            <View>
                <Text style={[globalPage.whiteColor, styles.votingTitle]}>Participe da Votação</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Votação')}>
                    <Text style={[globalPage.yellowColor, styles.votingSubtitle]}>Vote agora!</Text>
                </TouchableOpacity>
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
}