import axios from 'axios';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import InputComponent from './input.js';

export default function Connexion() {
  const [fontsLoaded] = useFonts({
    Jaro: require('../../assets/fonts/jaro.ttf'), 
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit() {
    if (email && password){
      console.log(email);
      console.log(password);
      axios.post('http://192.168.0.12:3002/login/', {
        email,
        password
      })
      .then(res => console.log(res.data))
      .catch(err => console.error(err.response.data));
    }
    
  }

  if (!fontsLoaded) {
    return <Text>Chargement...</Text>; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome !</Text>
      <View>
        <InputComponent textValue="Email" onChangeText={setEmail} />
        <InputComponent textValue="Password" onChangeText={setPassword} />
        <Pressable onPress={handleSubmit}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </Pressable>
      </View>
      
      
      <Button style={styles.button} buttonColor= 'black' textColor="white" onPress={handleSubmit}>Sign In</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop:30,
    borderRadius: 10,
    width: '80%',
    height: '70%',
    backgroundColor: '#fff'
  },
  text : {
    marginTop: 0,
    marginBottom: 50,
    fontFamily: 'Jaro', 
    fontSize: 46,
  },

  button: {
    width: '80%',
    height:  '10%',
    borderRadius: 6
  },

  forgotText: {
    fontSize: 10,
    color: '#E1ACA0', 
    alignSelf: 'flex-end'
  }




});
