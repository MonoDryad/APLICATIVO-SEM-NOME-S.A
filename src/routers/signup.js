import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import CadastroCont from '../pages/cadastroCont';

const Stack = createStackNavigator();

function Logado(){   
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="CadastroCont" component={CadastroCont} />
        </Stack.Navigator>
    )

}

export default Logado