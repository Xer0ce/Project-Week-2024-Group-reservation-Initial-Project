import { StyleSheet } from "react-native";

export default StyleSheet.create({
    topBar: {
        height: "8%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#696969',
    },
    profil: {
        height: 45,
        width: 45,
        marginLeft: 70,
        resizeMode: 'contain',
    },
    partagezdonnez: {
        height: 125,
        width: 125,
        marginLeft: 125,
        resizeMode: 'contain',
    },
    rowTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
});