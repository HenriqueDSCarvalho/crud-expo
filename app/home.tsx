import { View, Text } from "react-native";
import {Styles} from '../assets/CSS/Styles';
export default function Home(){
    return(
        <View style={Styles.container}>
            <Text style={Styles.formTitle}>
                pagina inicial
            </Text>
        </View>
    );
}