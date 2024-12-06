import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    formTitle: {
        fontSize: 36,
        fontWeight: "bold",
        color: "blueviolet",
        margin: 10,
    },
    FormInput: {
        borderColor: "blueviolet",
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 22,
        width: "80%",
        margin: 10,
        padding: 10,
    },
    FormButton: {
        backgroundColor: "blueviolet",
        width: "80%",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",  
    },
    TextButton: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    subButton: {
        padding: 10,
    },
    subTextButton: {
        color: "blueviolet",
    },
    //telas internas
    internalContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 25,
    },
    topBar: {
        flexDirection: 'row-reverse',
        padding: 10,
        backgroundColor: 'blueviolet',
        width: '100%',
    },
    topBarButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
});