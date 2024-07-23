import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import React from 'react';
import { CustomDrawerContent } from '../components/CustomDrawerContent/CustomDrawerContent';
import { useSelector } from 'react-redux';
import { getThemeMode } from '../selectors/getThemeMode';
import { dark, light } from '../constants/theme';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={() => {
                const { themeMode } = useSelector(getThemeMode);
                const theme = themeMode === 'dark' ? dark : light;

                return {
                    title: 'Pitch',
                    drawerLabelStyle: {
                        fontFamily: 'Roboto-Medium',
                    },
                    drawerStyle: {
                        backgroundColor: theme.secondaryBackground,
                    },
                    headerStyle: {
                        backgroundColor: theme.background,
                        height: 72,
                    },
                    headerTitleStyle: {
                        fontFamily: 'LexendDeca-Bold',
                        fontSize: 24,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: theme.primaryText,
                    drawerActiveBackgroundColor: theme.background,
                    drawerActiveTintColor: theme.support1,
                    drawerInactiveTintColor: theme.primaryText,
                    drawerInactiveBackgroundColor: theme.secondaryBackground,
                };
            }}
        >
            <Drawer.Screen
                name="homeStack"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                    drawerLabel: 'Início',
                }}
            />
            <Drawer.Screen
                name="profileStack"
                component={ProfileStackScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                    drawerLabel: 'Meu perfil',
                }}
            />
            <Drawer.Screen
                name="logoutStack"
                component={LogoutStackScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="log-out" color={color} size={size} />
                    ),
                    drawerLabel: 'Sair',
                }}
            />
        </Drawer.Navigator>
    );
}

function ProfileStackScreen() {
    return <StackRoutes initialRouteName="profile" />;
}

function LogoutStackScreen() {
    return <StackRoutes initialRouteName="login" />;
}
