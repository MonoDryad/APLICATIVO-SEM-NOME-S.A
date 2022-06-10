import { StyleSheet, Image, Text, ScrollView ,View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/noticias'
import aviso from '../assets/images/noticia-Gaia.png'
import linha from '../assets/images/linha.png'

import Header from '../component/UserHeader'
import globalPage from '../styles/globalPage'

import Copyright from '../component/Copyright'

function Noticias({navigation}){
    return (
        <View style={[globalPage.pageContainer, globalPage.pageColor]} >
            <Header border={true}/>
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
            <Copyright/>
        </View>
    )
}


export default Noticias