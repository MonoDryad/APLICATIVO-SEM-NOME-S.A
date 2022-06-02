import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#242424',
        maxHeight: 300,
        borderColor: '#ffd200',
        borderBottomWidth: 2,
        width: '100%'
    },
    headerTitle: {
        color: '#ffd200',
        fontSize: 36,
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },
    headerGames:{
        marginTop: 21,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerGamesInfo:{
        color: '#ffd200'
    },
    headerGamesVS:{
        fontSize: 42
    },
    teamHeaderImage:{
        width: 100,
        height: 100,
        marginLeft: 40,
        marginRight: 40,
    },
    headerSubView: {
        alignItems: 'center',
    },
    headerTeamFrag:{
        color: 'white',
        textAlign: 'center'
    },
    headerMaisInformacao:{
        marginTop: 10,
        fontSize: 26,
        color: '#ffd200',
    },
    votingView:{
        alignItems: 'center',
        borderBottomColor: '#ffd200',
        borderBottomWidth: 1,
        width: '100%'
    },
    yellowColor:{
        color: '#ffd200',
    },
    whiteColor:{
        color: '#fff',
    },
    votingTitle: {
        fontSize: 34,
    },
    votingSubtitle:{
        fontSize: 26,
        textAlign: 'center'
    },
    mainVotingView:{
        marginTop: 30,
    },
    votingCounts:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewVotingCounts:{
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    percentageVotingCount:{
        fontSize: 25,
        color: 'white'
    },
    grayVotingColor:{
        color: '#696969',
        marginLeft: 10,
        marginRight: 10,
    },
    separateVotingTeams:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mySliderView:{
        width: '100%',
        height: 30,
        borderRadius: 1000,
        backgroundColor: '#ff0000'
    }
})