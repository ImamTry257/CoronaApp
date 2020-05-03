import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail } from '../page';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouterName="Detail">
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default Router;