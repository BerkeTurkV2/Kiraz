import React from 'react'
import { View,Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Entypo";
import Colors from '../Assets/Colors/Colors';
import styles from "./RouterStyles";

import Main from '../Pages/Main/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.main},
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
        </Stack.Navigator>
    )
}

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
                <Tab.Screen name="Main2" component={MainStack} options={{
                    tabBarIcon: () => (
                        <Icon name="home" color={Colors.gray} size={24} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer >
    )
};

export default Router;