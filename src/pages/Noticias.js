import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/noticias'
import aviso from '../assets/images/noticia-Gaia.png'
import linha from '../assets/images/linha.png'
import mainHeader from '../styles/mainHeaderStyles'
import coin from '../assets/images/gcupmoedas.png'
import userImage from '../assets/images/account.png'

function Noticias({navigation}){
    return (
    <View style={styles.container} >
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
       <TouchableOpacity style={styles.buttonNoticias}onPress={() => navigation.navigate('Gaia-noticias')}>
            <View>
                <Image style={styles.avisoGaia}source={aviso}></Image>
            </View>
            <View style={styles.separarText}>
                <Text style={styles.viewButton}>Campeão Banido</Text>
                <Text style={styles.textButton}>O campeão Tryndamare está desativado no torneio por 
                problemas que estão afetando o campeonato negativamente
                </Text>                      
            </View>
       </TouchableOpacity>
                <Image style={styles.linhaGaia}source={linha}></Image>
    </View>
    )
}


export default Noticias