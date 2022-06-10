import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import styles from '../styles/cadastro'

import user from '../assets/images/user.png'
import password from '../assets/images/password.png'

import Copyright from '../component/Copyright'

function Login({ navigation }){
     return (
          <View style={styles.container}>
               <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
               <Image style={[styles.gcuplogo]} source={gaialogo}/>
               <Text style={styles.bigupwelcome}>Bem-vindo à Gaia Cup</Text>
               <Text style={styles.signup}>Faça o seu Login</Text>
               <View style={{marginLeft: 40}}>
                    <Image source={user} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário ou E-mail"/>
               </View>
               <View style={{marginLeft: 40}}>
                    <Image source={password} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput secureTextEntry={true} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Senha"></TextInput>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.alreadyAccount}>Eu não possuo uma conta, desejo 
                    <Text style={[styles.yellowText]}> fazer o cadastro.</Text>
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignItems: 'center',marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={styles.seta}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Conectar</Text>
               </TouchableOpacity>
               <Copyright/>
          </View>
     )
}

export default Login