import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, SplashPage, News } from '../page';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouterName="News">
            <Stack.Screen 
                name="SplashPage" 
                component={SplashPage}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="News" 
                component={News}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default Router;