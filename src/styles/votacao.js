import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    votingView:{
        marginTop: 20,
        width: '90%'
    },
    mid:{
        marginLeft: 30,
        marginRight: 30
    },
    titulo:{
        color: '#fff',
        fontSize: 36,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },

    subtitulo:{
        fontSize: 26,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },
    votacao:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    time1:{
        width: 120,
        height: 120
    },
    time2:{
        width: 120,
        height: 120 
    },
    botaoA:{
        backgroundColor: '#3b3a3a',
        color: '#fff',
        borderWidth: 3,
        borderColor: '#059ff2',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        width: 110,
        padding: 6,
    },
    vs:{
        color: '#ebd407',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        
    },
    botaoV:{
        backgroundColor: '#3b3a3a',
        color: '#fff',
        borderWidth: 3,
        borderColor: '#ff0000',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        width: 110,
        padding: 6
    },
    copyright:{
        marginTop: 20,
        marginBottom: 30,
        color: 'white'
    },
    mainVotingView:{
        marginTop: 20,
        justifyContent: 'center',
    },
    mySliderView:{
        width: '100%',
        height: 30,
        borderRadius: 1000,
        backgroundColor: '#ff0000',
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
})