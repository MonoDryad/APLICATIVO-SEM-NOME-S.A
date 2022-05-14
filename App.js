import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import {Component} from 'react';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity, Button } from 'react-native';
import cadastroStyles from './src/styles/cadastroStyles'

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', animationEnabled: false, }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', animationEnabled: false, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};