import FaseOctogonal from '../component/FaseOctogonal';
import FaseGrupo from '../component/FaseGrupo';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function TabelaRouter(){
    return(
        <Stack.Navigator screenOptions={{headerTintColor: '#fff', headerStyle: {backgroundColor: '#373737'},headerShown: true }}>
            <Stack.Screen name="FaseOctogonal" component={FaseOctogonal} options={{title: 'Fase Octogonal'}} />
            <Stack.Screen name="FaseGrupo" component={FaseGrupo} options={{title: 'Fase de Grupos'}} />
        </Stack.Navigator>
    )
}