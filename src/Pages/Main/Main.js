import React from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';
import Card from '../../Components/CategoriesCard/Card';
import categoryData from "../../Json/category.json";
import styles from "./MainStyles";

function Main() {

    const renderItem = ({ item }) => (
        <Card categoryImage={item.image} categoryName={item.categoryName} />
    );

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={"#811638"} />
            <Image style={styles.infoImage} source={require("../../Assets/info2.png")} resizeMode='stretch' />
            <FlatList
                data={categoryData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>
    )
};

export default Main;