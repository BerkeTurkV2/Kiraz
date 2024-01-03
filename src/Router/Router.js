import React from 'react'
import { View, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import Colors from '../Assets/Colors/Colors';
import styles from "./RouterStyles";

import Main from '../Pages/Main/Main';
import Products from '../Pages/Products/Products';

import Search from '../Pages/Search/Search';
import Cart from '../Pages/Cart/Cart';
import Profile from '../Pages/Profile/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.main },
            headerTitleAlign: "center",
            headerTintColor: "white",
        }} >
            <Stack.Screen name="Main" component={Main} initialParams={Main} options={{
                headerTitle: () => (
                    <View style={styles.container}>
                        <Image style={styles.logo} source={require("../Assets/logo.png")} resizeMode='contain' />
                        <Text style={styles.title}>Kiraz Market</Text>
                    </View>
                ),
            }} />
            <Stack.Screen name="Products" component={Products} options={{
                title: "Ürünler",
            }} />
        </Stack.Navigator>
    )
};

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.main },
            headerTitleAlign: "center",
            headerTintColor: "white",
        }} >
            <Stack.Screen name="Search" component={Search} options={{
                title: "Arama",
            }} />
        </Stack.Navigator>
    )
};

const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.main },
            headerTitleAlign: "center",
            headerTintColor: "white",
        }} >
            <Stack.Screen name="Cart" component={Cart} options={{
                title: "Sepet",
            }} />
        </Stack.Navigator>
    )
};

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.main },
            headerTitleAlign: "center",
            headerTintColor: "white",
        }} >
            <Stack.Screen name="Profile" component={Profile} options={{
                title: "Profil",
            }} />
        </Stack.Navigator>
    )
};

function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                labeled={false}
                barStyle={styles.tabBar}>
                <Tab.Screen name="MainStack" component={MainStack} options={{
                    tabBarIcon: () => (
                        <Icon name="home" color={Colors.gray} size={24} />
                    ),

                }} />
                <Tab.Screen name="SearchStack" component={SearchStack} options={{
                    tabBarIcon: () => (
                        <Icon name="search" color={Colors.gray} size={24} />
                    ),
                }} />
                <Tab.Screen name="CartStack" component={CartStack} options={{
                    tabBarIcon: () => (
                        <Icon name="cart" color={Colors.gray} size={24} />
                    ),
                }} />
                <Tab.Screen name="ProfileStack" component={ProfileStack} options={{
                    tabBarIcon: () => (
                        <Icon name="person" color={Colors.gray} size={24} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer >
    )
};

export default Router;