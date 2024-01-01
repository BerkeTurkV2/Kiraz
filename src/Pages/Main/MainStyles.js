import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    infoImage: {
        width: Dimensions.get("window").width / 1.05,
        height: Dimensions.get("window").height / 4.2,
        margin: 10,
    }
})