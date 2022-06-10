import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "../styles/tabela"

import globalPage from '../styles/globalPage'
import Header from '../component/UserHeader'

import Copyright from '../component/Copyright'

export default function Tabela({ navigation }){
    return (
        <View style={[globalPage.pageColor, {flex: 1}]}>
            <Header border={true}/>
            <View styles={styles.mid}>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> navigation.navigate('TabelaRouter', {screen: 'FaseOctogonal'})}>
                        <Text style={styles.titulo}>Fase Octogonal - Quarta Edição</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> navigation.navigate('TabelaRouter', {screen: 'FaseGrupo'})}>
                        <Text style={styles.titulo}>Fase de Grupos - Quarta Edição</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Copyright/>
        </View>
    )
}