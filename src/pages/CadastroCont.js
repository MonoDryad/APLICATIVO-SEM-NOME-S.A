import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import styles from '../styles/cadastro'

import password from '../assets/images/password.png'
import Copyright from '../component/Copyright'

export default function CadastroCont({ navigation }){
     let userName = 'Usuário'
     return (
          <View style={styles.container}>
               <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
               <Image style={[styles.bigupwelcome, styles.gcuplogo]} source={gaialogo}/>
               <Text style={styles.bigupwelcome}>Bem-vindo {userName}</Text>
               <Text style={styles.signup}>Para finalizar o cadastro, crie a sua senha</Text>
               <View style={{marginLeft: 40}}>
                    <Image source={password} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Senha"/>
               </View>
               <View style={{marginLeft: 40}}>
                    <Image source={password} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput secureTextEntry={true} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Confirme a Senha"></TextInput>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate('Home')}style={{alignItems: 'center',marginLeft: 300, marginTop: 40}}>
                    <Image source={seta} style={styles.seta}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Finalizar</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.goBack()}style={{alignItems: 'center',marginLeft: -300, marginTop: -100}}>
                    <Image source={seta} style={[{transform: [{ rotate: '180deg'}]},styles.seta]}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Voltar</Text>
               </TouchableOpacity>
               <Copyright/>
          </View>
     )
}