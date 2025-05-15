import { Pressable, StyleSheet, Text } from "react-native";

export default function CardPostagem({ titulo, conteudo, autor, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.titulo}>{ titulo }</Text>
        <Text style={styles.textoConteudo}>
          {conteudo.length > 60 ? conteudo.slice(0, 100) + "..." : conteudo}
        </Text>
        <Text style={styles.textoAutor}>Autor: { autor }</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    backgroundColor: '#98A0A8',
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#021123'
  },
  textoConteudo: {
    fontSize: 16,
    color: '#021123'
  },
  textoAutor: {
    fontSize: 12,
    color: '#021123'
  }
})