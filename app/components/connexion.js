import axios from 'axios';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <InputComponent textValue="Email" secureTextEntry={false} secureEye={false} onChangeText={setEmail} />
        <InputComponent textValue="Password" secureTextEntry={true} secureEye={true} onChangeText={setPassword} />
        <Pressable onPress={handleSubmit}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </Pressable>
      </View>
      
      
      <Button style={styles.button} buttonColor= 'black' textColor="white" contentStyle={{ height: 50 }} onPress={handleSubmit}>Sign In</Button>

      <View style={styles.orLine}>
        <View style={styles.line}></View>
        <Text style={styles.orText}> Or </Text>
        <View style={styles.line}></View>
      </View>

      <Pressable style={styles.googleButton} onPress={() => promptAsync()}>
        <View style={styles.singInTextWithGoogle}>
          <Icon name="google" size={24} color="blue" style={{ marginRight: 10 }} />
          <Text>Sign In with Google</Text>
        </View>
      </Pressable>

      <View>
        <Text style={{fontWeight:"bold", margin:15}}>Don't have an account ?</Text>
      </View>

      <View style={styles.signUp}>
        <Text style={{color:"gray"}}>Sign Up</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop:20,
    borderRadius: 12,
    width: '80%',
    height: '75%',
    backgroundColor: '#fff'
  },
  text : {
    marginTop: 35,
    marginBottom: 30,
    fontFamily: 'Jaro', 
    fontSize: 46,
  },

  button: {
    width: '80%',
    borderRadius: 6,
    
  },

  forgotText: {
    marginTop: -10,
    marginBottom: 25,
    fontSize: 10,
    color: '#E1ACA0', 
    alignSelf: 'flex-end'
  },

  orLine : {
    marginTop: 20,
    marginBottom: 20,
    flexDirection : 'row',
    justifyContent: 'flex-start'
  },

  orText : {
    color: 'lightgray',
    fontWeight: 900,
    fontSize: 20,
    marginTop: -13,
    marginLeft: 25,
    marginRight: 25
  },

  line : {
    backgroundColor: 'lightgray',
    height: 1,
    width: 75
  },

  singInTextWithGoogle : {
    flexDirection: 'row',
    paddingLeft : 30,
    paddingRight : 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2
  },

  signUp : {
    marginBottom: 35
  }



});
