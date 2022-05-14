import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native';
import gaialogo from '../../assets/images/1.png'
import hexagon from '../../assets/images/hexagons.png'
import seta from '../../assets/images/seta.png'
import cadastroStyles from '../../src/styles/cadastroStyles'

export default function Cadastro({navigation}){
     return (
          <View style={cadastroStyles.container}>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonOne]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonTwo]} source={hexagon}/>
               <Image style={[cadastroStyles.hexagon, cadastroStyles.hexagonThree]} source={hexagon}/>
               <Image style={[cadastroStyles.bigupwelcome, cadastroStyles.gcuplogo]} source={gaialogo}/>
               <Text style={cadastroStyles.bigupwelcome}>Bem-vindo à Gaia Cup</Text>
               <Text style={cadastroStyles.signup}>Cadastrar-se</Text>
               <TextInput style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="Usuário"></TextInput>
               <TextInput secureTextEntry={true} style={[cadastroStyles.insertname, cadastroStyles.inputLogin]} placeholderTextColor="#6e6e6e"  placeholder="E-mail"></TextInput>
               <TouchableOpacity onPress={() => navigation.push('Cadastro 1')}>
                    <Text style={cadastroStyles.alreadyAccount}>Eu já possuo uma conta, desejo 
                    <Text style={[cadastroStyles.yellowText]}> fazer login.</Text>
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity style={{marginLeft: 300, marginTop: 20}}>
                    <Image source={seta} style={cadastroStyles.seta}/>
                    <Text style={cadastroStyles.whiteColor}>Continuar cadastro</Text>
               </TouchableOpacity>
               <Text style={[cadastroStyles.copyright, cadastroStyles.whiteColor]}>© 2022 Copyright: Inexorabilis Team</Text>
               <StatusBar style="auto"/>
          </View>
     )
}