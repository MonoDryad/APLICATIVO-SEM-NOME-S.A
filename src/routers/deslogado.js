import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroCont from '../pages/CadastroCont';




const Stack = createStackNavigator();

function Deslogado(){   
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ animationEnabled: false, animation: 'none'}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ animationEnabled: false, animation: 'none'}}/>
            <Stack.Screen name="CadastroCont" component={CadastroCont} options={{ animationEnabled: false, animation: 'none'}}/>

        </Stack.Navigator>
    )

}

export default Deslogado