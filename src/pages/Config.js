import React, { useState } from 'react';
import { Alert, StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity, Modal, Pressable  } from 'react-native';
import styles from '../styles/cadastro'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { windowHeight, windowWidth } from '../../App';

import Copyright from '../component/Copyright'

function Config({ navigation }){
    
    const [users, setUsers] = useState([])
    
    const [userEmailOrUsername, setUserEmailOrUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')

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

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')

    const [modalUser, setModalUser] = useState(false)
    const [modalPassword, setModalPassword] = useState(false)
    

    const verifyUser = () => {   
        getUsers()
        setTimeout(() => {
        }, 200)
    }



 

    try{
        return (
            <View style={[{paddingTop: 80,flex: 1, backgroundColor: '#121212', alignContent: 'center', alignItems: 'flex-start',justifyContent: 'center',overflow: 'hidden'}]}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalUser}
                    onRequestClose={() => {
                        setModalUser(!modalUser);
                    }}
                >
                    <View style={{ backgroundColor:'#131313', flex: 1}}>
                        <View style={{margin: 10}}>
                            <View style={{marginTop: 35}}>
                                <Text style={[{color:'#fff', marginTop: 10, marginBottom: 10, fontSize:24, fontWeight: 'bold'}]}>Mudar Usuário ou E-mail</Text>
                                <Text style={[{color:'#fff', fontSize:19,fontWeight: 'bold'}]}>Usuário</Text>
                                <TextInput onTextChange={() => setUsername()}style={{backgroundColor: '#121212',color: '#fff', fontSize:17 ,marginTop: 5, borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                            </View>
                            <View style={{marginTop: 35,}}>
                                <Text style={[{color:'#fff', fontSize:19, fontWeight: 'bold'}]}>E-mail</Text>
                                <TextInput onTextChange={() => setEmail()} style={{backgroundColor: '#121212',color:'#fff',marginTop: 5, fontSize:17 , borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalUser(!modalUser); confirmChanges();}}
                                >
                                <Text style={styles.textStyle}>Confirmar mudanças</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalUser(!modalUser)}
                                >
                                <Text style={styles.textStyle}>Voltar e descartar mudanças</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalPassword}
                    onRequestClose={() => {
                        setModalPassword(!modalPassword);
                    }}
                >
                    <View style={{ backgroundColor:'#131313', flex: 1}}>
                        <View style={{margin: 10}}>
                            <View style={{marginTop: 35,}}>
                                <Text style={[{color:'#fff', marginTop: 10, marginBottom: 10, fontSize:24, fontWeight: 'bold'}]}>Nova senha</Text>
                                <Text style={[{color:'#fff', fontSize:19, fontWeight: 'bold'}]}>Senha</Text>
                                <TextInput style={{backgroundColor: '#121212',color:'#fff',marginTop: 5, fontSize:17 , borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                            </View>
                            <View style={{marginTop: 35,}}>
                                <Text style={[{marginTop: 15, color:'#fff', fontSize:19, fontWeight: 'bold'}]}>Confirmar Senha</Text>
                                <TextInput style={{backgroundColor: '#121212',color:'#fff',marginTop: 5, fontSize:17 , borderBottomColor: '#3b3939', borderBottomWidth: 1, borderLeftColor: '#3b3939', borderLeftWidth: 1,}}/>
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalPassword(!modalPassword); confirmChanges();}}
                                >
                                <Text style={styles.textStyle}>Confirmar mudanças</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalPassword(!modalPassword)}
                                >
                                <Text style={styles.textStyle}>Voltar e descartar mudanças</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View style={[{alignItems: 'center'}]}>
                    <Text style={{color:'#fff', fontSize: 30, marginBottom: 120,fontWeight: 'bold'}}>Gerenciar Conta</Text>
                </View>
                <View style={{marginLeft: 10, width: (windowWidth - 60)}}>
                    <View style={[{marginTop: 20}]}>
                        <TouchableOpacity onPress={() => {setModalUser(true); verifyUser();}} style={{flexDirection:'row',borderRadius: 5, width:(windowWidth - 20), backgroundColor:'#5e4e00', paddingTop: 10, paddingBottom: 10, paddingLeft: 4 }}><View style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', backgroundColor:'#5e4e00'}}><Icons name="account-edit" color="white" size={32}/><Text style={{paddingLeft: 7, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Mudar Usuário ou E-mail</Text></View></TouchableOpacity>
                    </View>
                    <View style={{marginTop: 35,}}>
                        <TouchableOpacity onPress={() => setModalPassword(!modalPassword)} style={{flexDirection:'row',borderRadius: 5, width:(windowWidth - 20), backgroundColor:'#5e4e00', paddingTop: 10, paddingBottom: 10, paddingLeft: 4 }}><View style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', backgroundColor:'#5e4e00'}}><Icons name="lock" color="white" size={32}/><Text style={{paddingLeft: 7, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Mudar senha</Text></View></TouchableOpacity>
                    </View>
                    <View style={[{marginTop: 35}]}>
                        <TouchableOpacity onPress={() => setModalPassword(!modalPassword)} style={{flexDirection:'row',borderRadius: 5, width:(windowWidth - 20), backgroundColor:'#820000', paddingTop: 10, paddingBottom: 10, paddingLeft: 4 }}><View style={{flexDirection:'row',borderRadius: 5,alignItems: 'center', backgroundColor:'#820000'}}><Icons name="alert" color="white" size={32}/><Text style={{paddingLeft: 7, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Zona perigosa</Text></View></TouchableOpacity>
                    </View>
                </View>

                <Copyright/>
            </View>
        )
    }catch(error){
        throw error
    }
    
}

export default Config