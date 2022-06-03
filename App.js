import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Deslogado from './src/components/signup';
import Logado from './src/components/signed'

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Login" component={Deslogado} options={{ title: 'Login', animationEnabled: false, animation: 'none'}}/>
        <Stack.Screen name="Home" component={Logado} options={{ title: 'Home', animationEnabled: false, animation: 'none'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App