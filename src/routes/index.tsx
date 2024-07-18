import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';

import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import AuthStackScreen from './authStackScreen.routes';

export default function Routes() {
    const isAuthenticated = false;
    const [fontsLoaded] = useFonts({
        'LexendDeca-Regular': require('../../assets/fonts/LexendDeca-Regular.ttf'),
        'LexendDeca-Medium': require('../../assets/fonts/LexendDeca-Medium.ttf'),
        'LexendDeca-SemiBold': require('../../assets/fonts/LexendDeca-SemiBold.ttf'),
        'LexendDeca-Bold': require('../../assets/fonts/LexendDeca-Bold.ttf'),
        'LexendDeca-ExtraBold': require('../../assets/fonts/LexendDeca-ExtraBold.ttf'),
        'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <NavigationContainer>
                {isAuthenticated ? <DrawerRoutes /> : <AuthStackScreen />}
            </NavigationContainer>
        </View>
    );
}
