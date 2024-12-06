import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Styles } from "../assets/CSS/Styles";
import { useState } from "react";
import { auth } from '../assets/firebase.config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'expo-router';

export default function Index() {

  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();


  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential)=>{
        const user = userCredential.user;
        router.replace('/home');
    })
    .catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
  }

  function cadastro(){
    router.replace('/cadastro');
  }

  function replacePass(){
    router.replace('/replacePass');
  }

  return (
    
    <View style={Styles.container}>
      <Text style={Styles.formTitle}>Login do sistema</Text>
      <StatusBar style="auto" />
      <TextInput style={Styles.FormInput}
        placeholder="informe seu e-mail"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email.adress"
        value={userMail}
        onChangeText={setUserMail}

      />
      <TextInput style={Styles.FormInput}
        placeholder="informe sua senha"
        autoCapitalize="none"
        value={userPass}
        onChangeText={setUserPass}
        secureTextEntry />
      <Pressable style={Styles.FormButton} onPress={userLogin}>
        <Text style={Styles.TextButton}>logar</Text>
      </Pressable>
      <View style={Styles.subContainer}>
        <Pressable style={Styles.subButton}
        onPress={replacePass}>
          <Text style={Styles.subTextButton}>esqueci minha senha </Text>
        </Pressable>
        <Pressable style={Styles.subButton} 
        onPress={cadastro}>
          <Text style={Styles.subTextButton}>novo usuario</Text>
        </Pressable>
      </View>

    </View>

  );
}

