import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp2/WeatherApp2/screens/Splash.js';
import Main from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp2/WeatherApp2/screens/Main.js';  

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};

export default Navigation;