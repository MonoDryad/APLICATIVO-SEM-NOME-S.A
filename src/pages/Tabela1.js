import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "../styles/tabela1"
import mainHeader from '../styles/mainHeaderStyles'
import coin from '../assets/images/gcupmoedas.png'
import userImage from '../assets/images/account.png'

export default function Tabela1({ navigation }){
    return (
        <View style={styles.container}>
            <View style={{paddingLeft: 10, paddingRight: 10, backgroundColor:'#121212',marginTop: 25, flexDirection: 'row',borderBottomColor: '#ffd200', borderBottomWidth: 1,}}>
                <View style={[{marginBottom: 10,},mainHeader.container]}>
                    <View style={mainHeader.coinView}>
                        <Image style={mainHeader.coinImage} source={coin}/>
                        <Text style={mainHeader.coinText}>0</Text>
                    </View>
                    <View style={mainHeader.userView}>
                        <Image style={mainHeader.userImage} source={userImage}/>
                        <Text style={mainHeader.userText}>Usuário</Text>
                    </View>
                </View>
            </View>
        <View styles={styles.mid}>

            <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate('FaseOctogonal')}>
                    <Text style={styles.titulo}>Fase Octogonal - Quarta Edição</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate('FaseGrupo')}>
                <Text style={styles.titulo}>Fase de Grupos - Quarta Edição</Text>
                </TouchableOpacity>
            </View>

        
        </View>


        {/* <View styles={styles.footer}>
        </View> */}




    </View>
    )
}