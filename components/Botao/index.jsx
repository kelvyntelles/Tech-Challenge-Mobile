import { Pressable, StyleSheet, Text } from 'react-native';

export default function Botao ({ onPress, titulo }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{titulo}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      borderRadius: 32,
      padding: 8,
      borderWidth: 2,
      borderColor: '#B672FF'
    },
    buttonText: {
      textAlign: 'center',
      color: '#B672FF',
      fontSize: 18
    }
})