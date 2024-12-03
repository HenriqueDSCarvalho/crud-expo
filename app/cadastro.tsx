import { View, Text, TextInput, Pressable } from "react-native";
import { Styles } from '../assets/CSS/Styles';
import { useState } from "react";
import {useRouter} from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../assets/firebase.config';


export default function cadastro() {
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const router = useRouter();

    function newUser() {
        if (userMail === '' || userPass === '' || userRePass === '') {
            alert('todos os campos devem ser preenchidos');
            return;
        } if (userPass !== userRePass) {
            alert('a senha e a confirmação não são iguis');
            return;
        } else {
            createUserWithEmailAndPassword(auth, userMail, userPass)
                .then((UserCredential) => {
                    const user = UserCredential.user;
                    alert("o usuario " +  userMail + " foi criado, faça login ");
                    router.replace('/');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                    router.replace('/');
                    
                })
        }
    }
    return (
        <View style={Styles.container}>
            <Text style={Styles.formTitle}>
                cadastro            
            </Text>

            <TextInput 
                style={Styles.FormInput}
                placeholder="E-mail de usuario"
                keyboardType="email.adress"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}    
            />
            <TextInput 
                style={Styles.FormInput}
                placeholder="Senha de usuario"
                autoCapitalize="none"
                secureTextEntry
                value={userPass}
                onChangeText={setUserPass} 
            />
            <TextInput 
                style={Styles.FormInput}
                placeholder="repita a senha"
                autoCapitalize="none"
                secureTextEntry
                value={userRePass}
                onChangeText={setUserRePass}
            />
        <Pressable style={Styles.FormButton}
        onPress={newUser}
        >
            <Text style={Styles.TextButton}>
                cadastrar
            </Text>

        </Pressable>
            
        </View>
    );
}