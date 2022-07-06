import React, { useState } from 'react';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import styles from '../styles/cadastro'

import user from '../assets/images/user.png'
import password from '../assets/images/password.png'

import Copyright from '../component/Copyright'

function Config({ navigation }){
    
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
        <View style={[styles.container, {overflow: 'hidden'}]}>
            <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
            <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
            <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
            <View style={[{}]}>
                <Text style={styles.signup}>Gerenciar Conta</Text>
            </View>
            <Copyright/>
        </View>
    )
}

export default Config