import React, { useState } from 'react';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'

import styles from '../styles/cadastro'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Copyright from '../component/Copyright'

import user from '../assets/images/user.png'
import email from '../assets/images/email.png'

export const newUserinformation = []

export default function Cadastro({ navigation }){
     const [users, setUsers] = useState([])
     
     const [userEmail, setUserEmail] = useState('')
     const [userNome, setUserNome] = useState('')

     const getUsers = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/usuario')
              const data = response.json()
              data.then(
                  (val) => setUsers(val)
              )
          }catch(error){
              console.log(error)
          }
     }

     getUsers()

     const getUserInformation = () => {
          
          console.log(userEmail, userNome)
          if(userEmail.length > 2 && userEmail.includes('@',3) && userEmail.includes('.',5)){
               if(userNome.length > 3){
                    if(!userNome.includes(' ',0)){
                         if(users.find((account) => {return account.email === userEmail}) == undefined){
                              if(users.find((account) => {return userNome === account.nome}) == undefined){
                                   newUserinformation.push({email: userEmail, nome: userNome})
                                   setTimeout(() => {
                                        navigation.navigate('CadastroCont')
                                   }, 300)
                              }else{
                                   console.log('usuario existe')
                              }
                         }else{
                              console.log('email existe')
                         }
                    }else{
                         console.log('Nome incorreto')
                    }
               }else{
                    console.log('nome curto')
               }
          }else{
               console.log('email errado')
          }
     }


     return (
          <View style={[styles.container, {overflow: 'hidden'}]}>
               <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
               <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
               <Image style={[styles.gcuplogo]} source={gaialogo}/>
               <Text style={styles.bigupwelcome}>Faça parte da Comunidade Gaia</Text>
               <Text style={styles.signup}>Crie a sua conta!</Text>
               <View style={{marginLeft: 40}}>
                    <Image source={user} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput onChangeText={text => setUserNome(text)} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário"/>
               </View>
               <View style={{marginLeft: 40}}>
                    <Image source={email} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput onChangeText={text => setUserEmail(text)} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="E-mail"></TextInput>
               </View>

               <TouchableOpacity onPress={() => getUserInformation()} style={{alignItems: 'center',marginLeft: 300, marginTop: 40}}>
               <Icons name="arrow-right-bold-circle" color="#ffd200" size={78}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Continuar</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.goBack()}style={{alignItems: 'center',marginLeft: -300, marginTop: -100}}>
                    <Icons name="arrow-right-bold-circle" color="#ffd200" size={78}  style={{transform: [{ rotate: '180deg'}]}}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Voltar</Text>
               </TouchableOpacity>
               <Copyright/>
          </View>
     )
}