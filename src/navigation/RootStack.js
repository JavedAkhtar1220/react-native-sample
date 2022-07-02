import React, { useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { NavigationContainer } from '@react-navigation/native';

import { AuthStack, TabStack } from '.';
import { ChangePassword, Contact, SubCategory, Payment } from '../screens';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()

const RootStack = () => {

    const { user } = useSelector(state => state.authReducers);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {Object.keys(user).length > 0 ? <>
                    <Stack.Screen name="MainStack" component={TabStack} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="Contact" component={Contact} />
                    <Stack.Screen name="SubCategory" component={SubCategory} />
                    <Stack.Screen name="Payment" component={Payment} />

                </> :
                    <Stack.Screen name='AuthStack' component={AuthStack} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
