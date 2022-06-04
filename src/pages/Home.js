import React from 'react'
import styles from '../styles/homeStyles'
import mainHeader from '../styles/mainHeaderStyles'
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native'

import time1 from '../assets/images/EDW.png'
import time2 from '../assets/images/png-akiha.png'
import noticiaImage from '../assets/images/aviso.png'
import coin from '../assets/images/gcupmoedas.png'
import userImage from '../assets/images/account.png'


function Home ({navigation}){

    let tabelaFase = 'Octogonal'
    let gaiacupEdicao = 'Quarta Edição'
    let redTeam = '#GOEDW'
    let blueTeam =  '#GOOKO'

    let redSideContVote = 200
    let blueSideContVote = 550
    let voteTotal = redSideContVote + blueSideContVote
    let blueSidePercentVote = Math.round((blueSideContVote / voteTotal) * 100)
    let redSidePercentVote = Math.round((redSideContVote / voteTotal) * 100)

    console.log(redSideContVote, blueSideContVote, blueSidePercentVote, voteTotal)

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Próximo Jogo</Text>
                    <View style={styles.headerGames}>
                        <View>
                            <Image style={styles.teamHeaderImage} source={time1}/>
                            <Text style={styles.headerTeamFrag}>2/0</Text>
                        </View>
                        <View style={styles.headerSubView}>
                            <Text style={[styles.headerGamesInfo, styles.headerGamesVS]}>VS</Text>
                            <Text style={styles.headerGamesInfo}>19:00 (MD1)</Text>
                        </View>
                        <View>
                            <Image style={styles.teamHeaderImage} source={time2}/>
                            <Text style={styles.headerTeamFrag}>0/2</Text>
                        </View>
                    </View>
                </View>
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
                <View style={styles.votingView}>
                    <View>
                        <Text style={[styles.whiteColor, styles.votingTitle]}>Participe da Votação</Text>
                        <TouchableOpacity>
                            <Text style={[styles.yellowColor, styles.votingSubtitle]}>Vote agora!</Text>
                        </TouchableOpacity>
                        <View style={styles.mainVotingView}>
                            <View style={styles.votingCounts}>
                                <View style={styles.viewVotingCounts}>
                                    <Text style={[styles.whiteColor, styles.percentageVotingCount]}>{blueSidePercentVote}%</Text>
                                    <Text style={[styles.grayVotingColor]}>{blueSideContVote}</Text>
                                </View>
                                <View style={styles.viewVotingCounts}>
                                    <Text style={[styles.grayVotingColor]}>{redSideContVote}</Text>
                                    <Text style={[styles.whiteColor, styles.percentageVotingCount]}>{redSidePercentVote}%</Text>
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
                <View style={styles.tabelaView}>
                    <View style={styles.tabelaTitleView}>
                        <Text style={styles.tabelaTitleText}>A tabela da {gaiacupEdicao}</Text>
                        <Text style={styles.tabelaSubTitleText}>Fase {tabelaFase} -
                        <TouchableOpacity>
                            <Text style={[styles.tabelaSubTitleText,styles.yellowColor]}> Veja mais!</Text>
                        </TouchableOpacity></Text>
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
                <Text style={[styles.copyright, styles.whiteColor]}>© 2022 Copyright: Inexorabilis Team</Text>
            </View>
        </ScrollView>
    )
}

export default Home