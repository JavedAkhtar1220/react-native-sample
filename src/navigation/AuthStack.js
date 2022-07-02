import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Register, Login, Welcome, ForgotPassword, SubCategory } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forgot" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack;