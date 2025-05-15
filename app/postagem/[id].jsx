import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BotaoEditar from "../../components/BotaoEditar";
import BotaoExcluir from "../../components/BotaoExcluir";
import LogoProjeto from "../../components/LogoProjeto";

export default function Postagem() {
  const { id, titulo, conteudo, autor } = useLocalSearchParams();

  const deletarPostagemBanco = () => {
    if (!id) {
      router.push('/');    
    }
    
    axios.delete(`http://192.168.18.125:8000/posts/${id}/delete/`);
    Alert.alert("Sucesso", "Postagem deletada com sucesso!");
    router.push('/');
  };

  function deletarPostagem() {
    Alert.alert('Deletar postagem?', titulo, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {text: 'Deletar', onPress: () => deletarPostagemBanco()},
    ]);
  }

  return (
      <SafeAreaView style={styles.container}>
          <LogoProjeto />
          <View style={styles.content}>
              <Text style={styles.titulo}>{titulo}</Text>
              <Text style={styles.textoConteudo}>{conteudo}</Text>
              <Text style={styles.textoAutor}>Autor: {autor}</Text>
          </View>
          <View style={styles.areaBotoes}>
            <BotaoEditar 
              titulo="Editar" 
              onPress={() => {
                router.push({
                  pathname: "/editar-postagem",
                  params: {
                    id,
                  },
                });
              }}
            />
            <BotaoExcluir titulo="Excluir" onPress={deletarPostagem} />
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#021123",
    gap: 40
  },
  content: {
    gap: 20
  },
  titulo: {
    fontSize: 23,
    color: '#FFF',
    fontWeight: 'semibold'
  },
  textoConteudo: {
    fontSize: 16,
    color: '#FFF',
  },
  textoAutor: {
    fontSize: 14,
    color: '#FFF',
  },
  areaBotoes: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-end'
  }
})