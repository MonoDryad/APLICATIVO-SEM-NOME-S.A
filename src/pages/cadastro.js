import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import cadastroStyles from '../styles/cadastroStyles'

export default function Cadastro({ navigation }){
     return (
          <View style={cadastroStyles.container}>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonOne]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonTwo]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonThree]} source={hexagon}/>
               <Image style={[cadastroStyles.gcuplogo]} source={gaialogo}/>
               <Text style={cadastroStyles.bigupwelcome}>Faça parte da Comunidade Gaia!</Text>
               <Text style={cadastroStyles.signup}>Cadastrar-se</Text>
               <TextInput style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário"></TextInput>
               <TextInput secureTextEntry={true} style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="E-mail"></TextInput>
               <TouchableOpacity onPress={() => navigation.navigate('Login', { name: 'Login' })}>
                    <Text style={cadastroStyles.alreadyAccount}>Eu já possuo uma conta, desejo 
                    <Text style={[cadastroStyles.yellowText]}> fazer login.</Text>
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('CadastroCont')} style={{marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={cadastroStyles.seta}/>
                    <Text style={cadastroStyles.whiteColor}>Continuar</Text>
               </TouchableOpacity>
               <Text style={[cadastroStyles.copyright, cadastroStyles.whiteColor]}>© 2022 Copyright: Inexorabilis Team</Text>
          </View>
     )
}