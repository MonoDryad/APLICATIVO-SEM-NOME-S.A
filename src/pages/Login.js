import React, { useState } from 'react';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import styles from '../styles/cadastro'

import user from '../assets/images/user.png'
import password from '../assets/images/password.png'

import Copyright from '../component/Copyright'

export const loggedUser = []

export const games = []
export const teams = []
export const votos = []

function Login({ navigation }){
     const [users, setUsers] = useState([])
     
     const [userEmailOrUsername, setUserEmailOrUsername] = useState('')
     const [userPassword, setUserPassword] = useState('')

     const getVotos = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/voto')
              const data = response.json()
              data.then(
                  (val) => votos.push(val)
              )
          }catch(error){
              console.log(error)
          }
     }

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

     const getGames = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/partida')
              const data = response.json()
              data.then(
                  (val) => games.push(val)
              )
          }catch(error){
              console.log(error)
          }
      }
  
     const getTeams = async () => {
          try{
              const response = await fetch('http://localhost:3000/gaiacup/equipe')
              const data = response.json()
              data.then(
                  (val) => teams.push(val)
              )
          }catch(error){
              console.log(error)
          }
     }

     getUsers()

     

     const verifyUser = () => {
          getGames()
          getTeams()
          getVotos()
          setTimeout(() => {
               console.log(users, users.find((account) => {return account.email === userEmailOrUsername || userEmailOrUsername === account.nome}))
               if(users.find((account) => {return userEmailOrUsername === account.email || account.nome === userEmailOrUsername }) != undefined){
                    console.log('acertou!', users.filter(account => {return userEmailOrUsername === account.email || userEmailOrUsername === account.nome}))
                    if(users.find((account) => {return userPassword === account.senha}) != undefined){
                         setTimeout(() => {
                              loggedUser.push(users.find((account) => {return account.email === userEmailOrUsername || userEmailOrUsername === account.nome && userPassword === account.senha}))
                              console.log(loggedUser)
                              setTimeout(() => {
                                   navigation.navigate('Home')
                              },300)
                              
                         }, 500)
                    }else{
                         console.log('errou2')   
                    }
               }else{
                    console.log('errou1')
               }
          }, 1000)   
     }



 


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
                    <TextInput onChangeText={text => setUserEmailOrUsername(text)} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário ou E-mail"/>
               </View>
               <View style={{marginLeft: 40}}>
                    <Image source={password} style={{position:'absolute', marginTop:40,left: -41.7,width:42.5,height:42.5, borderWidth: 1, borderColor: '#3b3939'}}/>
                    <TextInput onChangeText={text => setUserPassword(text)} secureTextEntry={true} style={[styles.insertname, styles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Senha"></TextInput>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.alreadyAccount}>Eu não possuo uma conta, desejo 
                    <Text style={[styles.yellowText]}> fazer o cadastro.</Text>
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => verifyUser()} style={{alignItems: 'center',marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={styles.seta}/>
                    <Text style={[{marginRight: 10},styles.whiteColor]}>Conectar</Text>
               </TouchableOpacity>
               <Copyright/>
          </View>
     )
}

export default Login