import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import CadastroCont from './src/pages/cadastroCont';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login', animationEnabled: false, animation: 'none'}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', animationEnabled: false, animation: 'none'}}/>
          <Stack.Screen name="CadastroCont" component={CadastroCont} options={{ title: 'Cadastro Continuação', animationEnabled: false, animation: 'none'}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}