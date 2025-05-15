import { Pressable, StyleSheet, Text } from 'react-native';

export default function BotaoEditar ({ onPress, titulo }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{titulo}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ccc',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      textAlign: 'center',
      color: '#000',
      fontSize: 18
    }
})