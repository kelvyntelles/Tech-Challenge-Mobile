import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#021123" barStyle="light-content" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="postagem/[id]"
          options={{
            headerShown: true,
            title: 'Postagem',
            headerStyle: {
              backgroundColor: '#021123'
            },
             headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="adicionar-postagem/index"
          options={{
            headerShown: true,
            title: 'Adicionar postagem',
            headerStyle: {
              backgroundColor: '#021123'
            },
             headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="editar-postagem/index"
          options={{
            headerShown: true,
            title: 'Editar postagem',
            headerStyle: {
              backgroundColor: '#021123'
            },
             headerTintColor: '#fff',
          }}
        />
      </Stack>
    </>
  );
}
