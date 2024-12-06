import { View, Text, TextInput, Pressable } from 'react-native';
import {Styles} from '../assets/CSS/Styles';
import {useState} from 'react';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from "../assets/firebase.config";

export default function replacePass() {

    const [userMail, setUserMail] = useState('');
    const router = useRouter();

    function replacePass(){
        if(userMail !== '' ){
            sendPasswordResetEmail(auth, userMail)
            .then(()=>{
                alert("foi enviado um email para: " + userMail + " verifique a sua caixa de email ");
                router.replace('/');
            })
            .catch((error) =>{
                const errorMessage = error.message;
                alert("ops! alguma coisa não deu certo. " + errorMessage + ". tente novamente ou precione voltar ");
                return;
            });
        } else {
            alert("É preciso informar umemail valido para efetuar a redefinição de senha");
            return;
        }
    }

    return(
        <View style={Styles.container}>
            <Text style={Styles.formTitle}>
                redefinir senha
            </Text>
            <TextInput 
                style={Styles.FormInput}
                placeholder='informe o email'
                keyboardType='email.address'
                autoCapitalize='none'
                autoComplete='email'
                value={userMail}
                onChangeText={setUserMail}
            />
            <Pressable style={Styles.FormButton}
            onPress={replacePass}>
                <Text style={Styles.TextButton}>Enviar</Text>
                
            </Pressable>
            <View style={Styles.subContainer}>
            <Pressable onPress={() => router.push("/")}>
                    <Text>voltar</Text>
                </Pressable>

            </View>

        </View>
    );
}