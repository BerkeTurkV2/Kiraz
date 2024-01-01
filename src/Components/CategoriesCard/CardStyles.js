import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 10,
        width: Dimensions.get("window").width / 4,
    },
    box: {
        alignItems: 'center',
        backgroundColor: "#dce2e5",
        borderRadius: 16,
    },
    image: {
        width: 70,
        height: 70,
        margin: 10,
    },
    categoryName: {
        textAlign: "center",
        color: "black",
        marginVertical: 6,
    }
})