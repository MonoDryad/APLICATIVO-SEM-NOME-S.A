import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from './assets/images/1.png'
import hexagon from './assets/images/hexagons.png'
import seta from './assets/images/seta.png'

export default function App() {
  return (
    
    <ScrollView>
      <View style={styles.container}>
        <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
        <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
        <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
        <Image style={[styles.bigupwelcome, styles.gcuplogo]} source={gaialogo}/>
        <Text style={styles.bigupwelcome}>Bem-vindo à Gaia Cup</Text>
        <Text style={styles.signup}>Cadastrar-se</Text>
        <TextInput style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário"></TextInput>
        <TextInput style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="E-mail"></TextInput>
        <Text style={styles.alreadyAccount}>Eu já possuo uma conta, desejo <TouchableOpacity><Text style={[styles.alreadyAccount, styles.yellowText]}>fazer login.</Text></TouchableOpacity></Text>  
        <TouchableOpacity style={{marginLeft: 300, marginTop: 20}}>
          <Image source={seta} style={styles.seta}/>
          <Text style={styles.whiteColor}> Continuar cadastro </Text>
        </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 50
  },

  bigupwelcome: {
    fontSize: 33,
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
    outlineStyle: 'none',
    padding: 7,
    width: 240
  },

  yellowText:{
    color: '#ffd200'
  },

  whiteColor:{
    color: 'white'
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
    top: 390,
    transform: [{ rotate: '375deg' }],
    left: -300,
    width: 450,
    height: 400,
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
    marginTop: 40, 
  },
  
  seta: {
    width: 80,
    height: 80,
  }
});
