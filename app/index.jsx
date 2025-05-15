import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import Botao from "../components/Botao";
import CardPostagem from "../components/CardPostagem";
import LogoProjeto from "../components/LogoProjeto";

export default function Index() {
  const [postagens, setPostagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregarPostagens() {
      try {
        const response = await axios.get("http://192.168.18.125:8000/posts/");
        const postagens = response.data.posts;
        postagens.reverse();
        setPostagens(postagens);
      } catch (error) {
        console.error("Erro ao buscar postagens:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarPostagens();
  }, []);

  const postagensFiltradas = postagens.filter((post) =>
    post.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <LogoProjeto />

      <TextInput
        style={styles.input}
        placeholder="Buscar por título..."
        placeholderTextColor="#aaa"
        value={busca}
        onChangeText={setBusca}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={postagensFiltradas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardPostagem
              titulo={item.title}
              conteudo={item.content}
              autor={item.escritor}
              onPress={() => {
                router.push({
                  pathname: "/postagem/[id]",
                  params: {
                    id: item.id,
                    titulo: item.title,
                    conteudo: item.content,
                    autor: item.escritor
                  },
                });
              }}
            />
          )}
          ListHeaderComponent={<Text style={styles.titulo}>Postagens:</Text>}
          contentContainerStyle={{ gap: 20, paddingBottom: 20 }}
          ListFooterComponent={<Botao onPress={() => router.navigate('/adicionar-postagem')} titulo="Adicionar nova postagem" />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#021123",
    gap: 20
  },
  titulo: {
    fontSize: 23,
    color: '#FFF',
    fontWeight: '600'
  },
  input: {
    backgroundColor: "#0e2a4b",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    fontSize: 16
  }
});
