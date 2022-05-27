import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../assets/images/1.png'
import hexagon from '../assets/images/hexagons.png'
import seta from '../assets/images/seta.png'
import cadastroStyles from '../styles/cadastroStyles'

export default function CadastroCont({ navigation }){
     return (
          <View style={cadastroStyles.container}>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonOne]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonTwo]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonThree]} source={hexagon}/>
               <Image style={[cadastroStyles.bigupwelcome, cadastroStyles.gcuplogo]} source={gaialogo}/>
               <Text style={cadastroStyles.bigupwelcome}>Continuar Cadastro</Text>
               <Text style={cadastroStyles.signup}>Crie uma senha para sua conta</Text>
               <TextInput style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Senha"></TextInput>
               <TextInput secureTextEntry={true} style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Confirmar senha"></TextInput>
               <TouchableOpacity style={{marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={cadastroStyles.seta}/>
                    <Text style={cadastroStyles.whiteColor}>Finalizar</Text>
               </TouchableOpacity>
               <Text style={[cadastroStyles.copyright, cadastroStyles.whiteColor]}>© 2022 Copyright: Inexorabilis Team</Text>
          </View>
     )
}