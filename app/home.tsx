import { View, Text, Pressable } from "react-native";
import {Styles} from '../assets/CSS/Styles';
import { auth } from '../assets/firebase.config';
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";

export default function Home(){
    
    const currentUser = auth.currentUser;
    const router = useRouter();

    function logout() {
        signOut(auth)
            .then(()=> {
                alert('você desconectou-se do sistema');
                router.replace('/');
            })
            .catch((error)=>{
                const errorMessage = error.Messege;
                alert(errorMessage);

            });
    }

    if (currentUser != null) {
        //alert("logado");
    } else {
        alert("É necessario estar logado para utilizar este recurso!");
        router.replace('/');
    }
    return(
        <View style={Styles.internalContainer}>
            <View style={Styles.topBar}>
                <Pressable onPress={logout}>
                    <Text style={Styles.topBarButtonText}>Sair</Text>
                </Pressable>
            </View>
            <Text style={Styles.formTitle}>
                pagina inicial
            </Text>
        </View>
    );
}