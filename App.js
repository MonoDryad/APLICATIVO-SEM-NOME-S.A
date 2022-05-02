import reactDom from "react-dom";
import {View, Text } from "react-native";
import styles from "./src/styles/app"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OLÁ</Text>
      <Text style={styles.title}>Não possuí uma conta? Crie uma!</Text>

    </View>
  );
}

export default App