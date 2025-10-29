import { StyleSheet, TextInput, View } from 'react-native';


export default function Input({textValue, onChangeText}) {


  return (
    <View style={styles.container}>
        <TextInput placeholder = {textValue}
        style={{ height: 60, width: 150, borderColor: 'gray', borderWidth: 1, marginBottom: 25 }}
        onChangeText={(text) => onChangeText(text)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    
})
