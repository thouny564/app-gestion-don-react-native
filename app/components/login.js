import axios from 'axios';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import InputComponent from './input.js';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        axios.post('http://localhost:3000/api/login', {
            email,
            password
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    }


    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <InputComponent textValue="Email" onChangeText={setEmail}/>
            <InputComponent textValue="Password" onChangeText={setPassword}/>
            <Button title="Submit" onPress={() => handleSubmit}></Button>
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  
    justifyContent: 'center', 
    alignItems: 'center',     
  },
});