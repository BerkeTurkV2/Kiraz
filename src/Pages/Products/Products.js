import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from "./ProductsStyles";

function Products({ route }) {

    const { item } = route.params;

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.categoryBox} >
            <Text style={styles.categoryName} >{item.subCategoryName}</Text>
        </TouchableOpacity>
        
    );

    return (
        <View>
            <FlatList
                data={item.subCategory}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
            />

        </View>
    )
};

export default Products;