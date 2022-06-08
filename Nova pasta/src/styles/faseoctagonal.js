import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        flex: 1,
        height: "100%"

    },
    header: {
        height: "10%",
        backgroundColor: "#242424",
        borderBottomWidth: 2,
        borderColor: '#ffd200',
        textAlign: "center",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    title: {
        color: "#fff",
        fontSize: 20
    },
    timeVermelho: {
        width: 60,
        height: 60
    },
    flecha: {
        width: 25,
        height: 25,
    },
    lugar: {
        flexDirection: "row",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: 0.5 ,
        borderColor: '#fff',
        width: '100%'
     
    },
    lugarTexto: {
        color: "#fff",
        fontSize:20,
        fontWeight: "bold",
        paddingBottom: 10


    },
    textoMeio:{
        color: "#fff",  
        fontSize:15,
      
    },
    textoFinal:{
        color: "#fff",
        fontSize:20 ,
        paddingBottom: 10
    },
    textoGrandeMeio:{
        color: "#fff",
        fontSize:18,
        flexDirection: "row", 
    },
    div1:{
        width: '15%'
    },
    div2:{
        width: '20%'
    },
    div3:{
        width: '50%'
    },
    div4:{
        width: '15%'
    }
})