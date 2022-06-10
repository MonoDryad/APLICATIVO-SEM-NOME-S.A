import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    separarText:{
        width:'60%',
        flexDirection: 'column',
        alignItems: 'center'



    },
    buttonNoticias:{
        flexDirection: 'row',
        width: '100%'

    },
    avisoGaia:{
        width: 200,
        height: 180,
        resizeMode: 'contain',
        marginTop: 10
        
    },
    viewButton:{
        fontSize: 20,
        color: '#fff',
        marginTop: 50,
        textAlign: 'center',
        width: '50%',
        alignItems: 'center'
      
    },
    textButton:{
        color: '#fff',
        width: '75%',
        textAlign: 'center'
    },
    linhaGaia:{
        width: '90%',
        height: '2%'

    }
})