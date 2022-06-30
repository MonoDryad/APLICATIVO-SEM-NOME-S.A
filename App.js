import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Deslogado from './src/routers/deslogado'
import Logado from './src/routers/logado'
import TabelaRouter from './src/routers/tabelaRouter'

import BackFront from './src/component/Back-Front-end'

const Stack = createStackNavigator();
const BackServer = new BackFront()
console.log(BackServer.getUsers())
console.log(BackServer.showUsers())
console.log(BackServer.users)

function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Login" component={Deslogado} options={{ title: 'Login', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="Home" component={Logado} options={{ title: 'Home', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="TabelaRouter" component={TabelaRouter} options={{ title: 'TabelaRouter', animationEnabled: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App