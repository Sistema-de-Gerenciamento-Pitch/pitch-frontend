import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthStackScreen;
