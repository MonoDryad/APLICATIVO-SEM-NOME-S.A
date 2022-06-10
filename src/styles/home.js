import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
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
        marginLeft: 30,
        marginRight: 30,
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
        width: '100%',
        paddingBottom: 20
    },

    votingTitle: {
        fontSize: 30,
        textAlign: 'center'
    },
    votingSubtitle:{
        fontSize: 26,
        textAlign: 'center'
    },
    mainVotingView:{
        marginTop: 30,
        justifyContent: 'center',
        width: '100%'
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
        width: 350,
        height: 30,
        borderRadius: 1000,
        backgroundColor: '#ff0000'
    },
    tabelaView:{
        borderBottomColor: '#ffd200',
        borderBottomWidth: 1,
        paddingBottom: 20,
        width: '100%'
    },
    tabelaTitleView: {
        marginTop: 30,
        alignItems: 'center'
    },
    tabelaSubTitleText:{
        fontSize: 26,
        color: 'white',
    },
    tabelaTitleText:{
        fontSize: 30,
        color: 'white'
    },
    tabelaTimeView:{
        marginTop: 35,
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    tabelaTimeSpacing:{
        width: '85%',
        marginLeft: 10,
    },
    teamLogoImage:{
        width: 80,
        height: 80,
    },
    teamNameTabela:{
        color: 'white',
        fontSize: 24
    },
    teamSiglaTabela:{
        color: '#6f6f6f'
    },
    noticiasMainView:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noticiasSubView:{
        flexDirection: 'row',
        marginTop: 30,
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noticiaView:{
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%'
    },
    imageNoticia:{
        width: 180,
        height: 80,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ffd200',
    },
    noticiasTitleText:{
        color: 'white',
        fontSize: 36
    },
    textNoticia:{
        color: 'white',
        width: '100%',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ffd200',
        backgroundColor: '#242424'
    },
    copyright: {
        marginTop: 20,
        marginBottom: 30,
    }

})