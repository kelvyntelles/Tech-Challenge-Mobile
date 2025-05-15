import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard, KeyboardAvoidingView, Platform, Pressable,
  StyleSheet, Text, TextInput, TouchableWithoutFeedback, View
} from "react-native";

export default function AdicionarPostagem() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');

  async function salvarPostagemBanco() {
    try {
      await axios.post("http://192.168.18.125:8000/posts/create/", {
        title: titulo,
        content: conteudo,
        escritor: autor
      });

      Alert.alert("Sucesso", "Postagem salva com sucesso!");
      setTitulo('');
      setConteudo('');
      setAutor('');
      router.push('/');
    } catch (error) {
      console.error("Erro ao salvar postagem:", error);
      Alert.alert("Erro", "Não foi possível salvar a postagem.");
    }
  }

  function submitPostagem() {
    if (titulo && conteudo && autor) {
      salvarPostagemBanco();
    } else {
      Alert.alert("Atenção", "Preencha todos os campos.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar postagem:</Text>

          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            numberOfLines={2}
            multiline={true}
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={styles.label}>Conteúdo:</Text>
          <TextInput
            style={styles.inputTextArea}
            numberOfLines={10}
            multiline={true}
            value={conteudo}
            onChangeText={setConteudo}
          />

          <Text style={styles.label}>Autor:</Text>
          <TextInput
            style={styles.input}
            numberOfLines={2}
            multiline={true}
            value={autor}
            onChangeText={setAutor}
          />

          <View style={styles.actions}>
            <Pressable onPress={submitPostagem} style={styles.botao}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10
  },
  inner: {
    backgroundColor: '#98A0A8',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    gap: 8
  },
  label: {
    fontWeight: '600',
    fontSize: 18
  },
  input: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    height: 50,
  },
  inputTextArea: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    height: 150,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12
  },
  botao: {
    backgroundColor: '#021123',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
