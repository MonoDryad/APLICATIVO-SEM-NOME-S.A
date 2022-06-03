import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Votacao from '../pages/login';
import Crono from '../pages/cadastro';
import Tabela from '../pages/cadastroCont';
import Noticias from '../pages/cadastroCont';
import Home from '../pages/Home'

import {Image, View} from 'react-native';

import imageHome from '../assets/images/component_home.png'
import imageTabela from '../assets/images/component_tabela.png'
import imageCrono from '../assets/images/component_crono.png'
import imageVotacao from '../assets/images/component_votacao.png'
import imageNoticia from '../assets/images/component_noticias.png'

const Tab = createBottomTabNavigator();

function Deslogado(){   
    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarStyle: { backgroundColor: '#242424' },headerShown: false, tabBarActiveTintColor: '#ffd200'}}>
            <Tab.Screen name="Crono" component={Crono} options={{tabBarIcon: ({size,focused,color}) => {
                return (
                    <Image
                        style={{ width: size, height: size }}
                        source={imageCrono}
                    />
                )
            },}}/>
            <Tab.Screen name="Tabela" component={Tabela} options={{tabBarIcon: ({size,focused,color}) => {
                return (
                    <Image
                        style={{ width: size, height: size }}
                        source={imageTabela}
                    />
                )
            },}}/>
            <Tab.Screen name="Home" component={Home} 
            options={{tabBarIcon: ({size,focused,color}) => {
                return (
                    <Image
                        style={{ width: size, height: size }}
                        source={imageHome}
                    />
                )
            },}}/>
            <Tab.Screen name="Votação" component={Votacao} options={{tabBarIcon: ({size,focused,color}) => {
                return (
                    <Image
                        style={{ width: size, height: size }}
                        source={imageVotacao}
                    />
                )
            },}}/>
            <Tab.Screen name="Notícias" component={Noticias} options={{tabBarIcon: ({size,focused,color}) => {
                return (
                    <Image
                        style={{ width: size, height: size }}
                        source={imageNoticia}
                    />
                )
            },}}/>
        </Tab.Navigator>
    )

}

export default Deslogado