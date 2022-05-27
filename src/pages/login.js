import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import cadastroStyles from '../styles/cadastroStyles'

function Login({ navigation }){
     return (
          <View style={cadastroStyles.container}>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonOne]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonTwo]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonThree]} source={hexagon}/>
               <Image style={[cadastroStyles.gcuplogo]} source={gaialogo}/>
               <Text style={cadastroStyles.bigupwelcome}>Bem-vindo à Gaia Cup</Text>
               <Text style={cadastroStyles.signup}>Faça o seu Login</Text>
               <TextInput style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário ou E-mail"></TextInput>
               <TextInput secureTextEntry={true} style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Senha"></TextInput>
               <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={cadastroStyles.alreadyAccount}>Eu não possuo uma conta, desejo 
                    <Text style={[cadastroStyles.yellowText]}> fazer o cadastro.</Text>
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity style={{marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={cadastroStyles.seta}/>
                    <Text style={cadastroStyles.whiteColor}>Conectar</Text>
               </TouchableOpacity>
               <Text style={[cadastroStyles.copyright, cadastroStyles.whiteColor]}>© 2022 Copyright: Inexorabilis Team</Text>
          </View>
     )
}

export default Login