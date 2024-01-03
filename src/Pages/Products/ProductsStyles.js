import { StyleSheet } from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
    container: {

    },
    categoryBox: {
        width: 100,
        borderColor: Colors.main,
        borderWidth: 0.6,
        borderRadius: 14,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        color: "black",
        padding: 4,
        fontSize: 12,
    }
});