import { StyleSheet } from "react-native";

export default StyleSheet.create({
    actionBar: {
        flexDirection: "column",
        height: "9%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "177%",
    },
    line: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#696969',
    },
    image: {
      height: 75,
      width: 75,
      resizeMode: 'contain',
    },
    row: {
      marginLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
});
