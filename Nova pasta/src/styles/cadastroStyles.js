import { StyleSheet } from 'react-native'

export default StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#121212',
          alignItems: 'center',
          justifyContent: 'center',
     },
     
     gcuplogo: {
          width: 250,
          height: 200,
          resizeMode: 'contain',
          marginTop: 12
     },
     
     bigupwelcome: {
          fontSize: 24,
          color: '#fff',
          fontWeight: 'bold',
          marginTop: 15
     },
     
     signup: {
          fontSize: 24,
          marginTop: 25,
          color: '#fff',
     },
     
     insertname: {
          color: '#fff',
          fontSize: 20,
          marginTop: 40, 
     },
     
     inputLogin:{
          borderBottomColor: '#3b3939',
          borderBottomWidth: 1,
          borderLeftColor: '#3b3939',
          borderLeftWidth: 1,
          padding: 7,
          width: 240
     },
     
     yellowText:{
          color: '#ffd200',
          fontSize: 20,
     },
     
     whiteColor:{
          color: 'white',
          marginLeft: 10
     },
     
     hexagon:{
          position: 'absolute',
          width: 250,
          height: 200,
          resizeMode: 'contain',
     },
     
     hexagonOne:{
          top: -109,
          transform: [{ rotate: '265deg' }],
          left: -130,
     },
     
     hexagonTwo:{
          top: 360,
          transform: [{ rotate: '375deg' }],
          left: -270,
          width: 400,
          height: 350,
     },
     
     hexagonThree:{
          top: -79,
          transform: [{ rotate: '235deg' }],
          left: 290,
          width: 200,
          height: 150,
     },
     
     alreadyAccount:{
          fontSize: 20,
          color: '#fff',
          marginTop: 20, 
     },
     
     seta: {
          width: 80,
          height: 80,
     },

     copyright: {
          marginTop: 15,
     }
})