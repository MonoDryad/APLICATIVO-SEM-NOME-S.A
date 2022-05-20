import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import CadastroCont from './src/pages/cadastroCont'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="CadastroCont" component={CadastroCont} options={{ title: 'Cadastro', animationEnabled: false, animation: 'none' }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', animationEnabled: false, animation: 'none' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};