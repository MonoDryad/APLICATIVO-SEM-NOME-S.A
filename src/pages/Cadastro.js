import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import styles from '../styles/cadastro'

import Copyright from '../component/Copyright'

import user from '../assets/images/user.png'
import email from '../assets/images/email.png'

export default function Cadastro({ navigation }){
     return (
          <View style={styles.container}>
               <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
               <Image style={[styles.gcuplogo]} source={gaialogo}/>
               <Text style={styles.bigupwelcome}>Faça parte da Comunidade Gaia</Text>
               <Text style={styles.signup}>Crie a sua conta!</Text>
               <View style={{marginLeft: 40}}>
                    <Image source={user} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário"/>
               </View>
               <View style={{marginLeft: 40}}>
                    <Image source={email} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput secureTextEntry={true} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="E-mail"></TextInput>
               </View>

               <TouchableOpacity onPress={() => navigation.navigate('CadastroCont')} style={{alignItems: 'center',marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={styles.seta}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Continuar</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.goBack()}style={{alignItems: 'center',marginLeft: -300, marginTop: -100}}>
                    <Image source={seta} style={[{transform: [{ rotate: '180deg'}]},styles.seta]}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Voltar</Text>
               </TouchableOpacity>
               <Copyright/>
          </View>
     )
}