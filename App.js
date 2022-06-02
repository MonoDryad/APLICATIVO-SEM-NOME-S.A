import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import CadastroCont from './src/pages/cadastroCont';
import Home from './src/pages/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="CadastroCont" component={CadastroCont} options={{ title: 'Cadastro Continuação', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', animationEnabled: false, animation: 'none'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App