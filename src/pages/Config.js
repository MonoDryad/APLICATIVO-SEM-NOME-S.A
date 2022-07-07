import React, { useState } from 'react';
import { Alert, StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity, Pressable  } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import styles from '../styles/cadastro'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


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


    

    const verifyUser = () => {   
        getUsers()
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
        <View style={[{flex: 1, backgroundColor: '#121212', justifyContent: 'center',overflow: 'hidden'}]}>
            <Image style={[styles.hexagon, styles.hexagonOne]} source={hexagon}/>
            <Image style={[styles.hexagon, styles.hexagonTwo]} source={hexagon}/>
            <Image style={[styles.hexagon, styles.hexagonThree]} source={hexagon}/>
            <View style={[{alignItems: 'center'}]}>
                <Text style={{color:'#fff', fontSize: 30, fontWeight: 'bold'}}>Gerenciar Conta</Text>
            </View>
            <View style={{marginLeft: 10, width: '80vw'}}>
                <View style={{marginTop: 35,}}>
                    <Text style={[{color:'#fff', marginTop: 10, marginBottom: 10, fontSize:24, fontWeight: 'bold'}]}>Mudar Usuário ou E-mail</Text>
                    <Text style={[{color:'#fff', fontSize:19,fontWeight: 'bold'}]}>Usuário</Text>
                    <TextInput style={{backgroundColor: '#121212',color: '#fff', fontSize:17 ,marginTop: 5, borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                </View>
                <View style={{marginTop: 35,}}>
                    <Text style={[{color:'#fff', fontSize:19, fontWeight: 'bold'}]}>E-mail</Text>
                    <TextInput style={{backgroundColor: '#121212',color:'#fff',marginTop: 5, fontSize:17 , borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                    <View style={[{marginTop: 20}]}>
                        <TouchableOpacity onPress={() => 
                            Alert.alert(
                                "Alert Title",
                                "My Alert Msg",
                                [
                                {
                                    text: "Cancel",
                                    onPress: () => Alert.alert("Cancel Pressed"),
                                    style: "cancel",
                                },
                                ],
                                {
                                cancelable: true,
                                onDismiss: () =>
                                    Alert.alert(
                                    "This alert was dismissed by tapping outside of the alert dialog."
                                    ),
                                }
                            )
                        } style={{flexDirection:'row',borderRadius: 5, width:'65vw', backgroundColor:'#003308'}}><View style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', backgroundColor:'#003308'}}><Icons name="exit-to-app" color="white" size={32}/><Text style={{fontWeight: 'bold', fontSize:20, color: '#fff'}}>Confirmar Mudanças</Text></View></TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 35,}}>
                    <Text style={[{color:'#fff', marginTop: 10, marginBottom: 10, fontSize:24, fontWeight: 'bold'}]}>Nova senha</Text>
                    <Text style={[{color:'#fff', fontSize:19, fontWeight: 'bold'}]}>Senha</Text>
                    <TextInput style={{backgroundColor: '#121212',color:'#fff',marginTop: 5, fontSize:17 , borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                    <Text style={[{marginTop: 15, color:'#fff', fontSize:19, fontWeight: 'bold'}]}>Confirmar Senha</Text>
                    <TextInput style={{backgroundColor: '#121212',color:'#fff',marginTop: 5, fontSize:17 , borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                    <View style={[{marginTop: 20}]}>
                        <TouchableOpacity onPress={() => 
                            Alert.alert(
                                "Alert Title",
                                "My Alert Msg",
                                [
                                {
                                    text: "Cancel",
                                    onPress: () => Alert.alert("Cancel Pressed"),
                                    style: "cancel",
                                },
                                ],
                                {
                                cancelable: true,
                                onDismiss: () =>
                                    Alert.alert(
                                    "This alert was dismissed by tapping outside of the alert dialog."
                                    ),
                                }
                            )
                        } style={{flexDirection:'row',borderRadius: 5, width:'65vw', backgroundColor:'#003308'}}><View style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', backgroundColor:'#003308'}}><Icons name="exit-to-app" color="white" size={32}/><Text style={{fontWeight: 'bold', fontSize:20, color: '#fff'}}>Confirmar Mudanças</Text></View></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[{marginTop: 50, marginBottom: 30, alignItems: 'center'}]}>
                <TouchableOpacity onPress={() => 
                      Alert.alert(
                        "Alert Title",
                        "My Alert Msg",
                        [
                          {
                            text: "Cancel",
                            onPress: () => Alert.alert("Cancel Pressed"),
                            style: "cancel",
                          },
                        ],
                        {
                          cancelable: true,
                          onDismiss: () =>
                            Alert.alert(
                              "This alert was dismissed by tapping outside of the alert dialog."
                            ),
                        }
                      )
                } style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', width:'70vw', backgroundColor:'#dd1639'}}><View style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', width:'70vw', backgroundColor:'#dd1639'}}><Icons name="exit-to-app" color="white" size={32}/><Text style={{fontWeight: 'bold', fontSize:20, color: '#fff'}}>Desconectar da Conta</Text></View></TouchableOpacity>
            </View>
            <Copyright/>
        </View>
    )
}

export default Config