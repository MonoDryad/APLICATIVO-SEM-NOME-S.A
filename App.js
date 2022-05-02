import { StatusBar } from 'expo-status-bar'
import reactDom from "react-dom";
import styles from './src/styles/styles'
import {View, Text } from "react-native";
import User from './src/scripts/user';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Olá {User()}, seja bem-vindo(a) à Gaia Cup</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App