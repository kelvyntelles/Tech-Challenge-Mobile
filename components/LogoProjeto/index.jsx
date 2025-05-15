import { StyleSheet, Text, View } from "react-native";

export default function LogoProjeto() {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Tech Challenge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF'
  }
})
