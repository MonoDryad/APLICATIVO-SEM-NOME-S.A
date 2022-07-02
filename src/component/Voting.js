import React from 'react'
import {View, Text, Image} from 'react-native'

export default Voting = () => {
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
}