import { StyleSheet } from 'react-native';
import Colors from '../Assets/Colors/Colors';

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 22,
    },
    logo: {
        width: 50,
        height: 50,
    },
    tabBar: {
        height: 60,
        backgroundColor: Colors.main,
        overflow: 'hidden',
        justifyContent: 'center',
    },
})