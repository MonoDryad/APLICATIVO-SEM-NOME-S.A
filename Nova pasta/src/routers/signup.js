import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import CadastroCont from '../pages/cadastroCont';

import FaseOctogonal from '../pages/FaseOctogonal';
import FaseGrupo from '../pages/FaseGrupo';


const Stack = createStackNavigator();

function Logado(){   
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ animationEnabled: false, animation: 'none'}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ animationEnabled: false, animation: 'none'}}/>
            <Stack.Screen name="CadastroCont" component={CadastroCont} options={{ animationEnabled: false, animation: 'none'}}/>
            {/* <Stack.Screen name="Tabela" component={Tabela} options={{ title: 'Tabela'}}/> */}
            <Stack.Screen name="FaseOctogonal" component={FaseOctogonal} options={{ animationEnabled: false, animation: 'none'}} />
            <Stack.Screen name="FaseGrupo" component={FaseGrupo} options={{ animationEnabled: false, animation: 'none'}} />
        </Stack.Navigator>
    )

}

export default Logado