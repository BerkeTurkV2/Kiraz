import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./CardStyles";

const categoryImages = {
    c1: require("../../Assets/Contents/c1.png"),
    c2: require("../../Assets/Contents/c2.png"),
    c3: require("../../Assets/Contents/c3.png"),
    c4: require("../../Assets/Contents/c4.png"),
    c5: require("../../Assets/Contents/c5.png"),
    c6: require("../../Assets/Contents/c6.png"),
    c7: require("../../Assets/Contents/c7.png"),
    c8: require("../../Assets/Contents/c8.png"),
    c9: require("../../Assets/Contents/c9.png"),
    c10: require("../../Assets/Contents/c10.png"),
    c11: require("../../Assets/Contents/c11.png"),
    c12: require("../../Assets/Contents/c12.png"),
    c13: require("../../Assets/Contents/c13.png"),
};

function Card({categoryImage,categoryName}) {
    return (
        <View style={styles.container}>
            <View style={styles.box} >
                <Image style={styles.image} source={categoryImages[categoryImage]} resizeMode='contain' />
            </View>
            <Text style={styles.categoryName}> {categoryName} </Text>
        </View>
    )
};

export default Card;