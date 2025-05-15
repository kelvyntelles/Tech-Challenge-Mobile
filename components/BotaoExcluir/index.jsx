import { Pressable, StyleSheet, Text } from 'react-native';

export default function BotaoExcluir ({ onPress, titulo }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{titulo}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'red',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 18
    }
})