import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Container, Header, PrimaryText } from './CustomDrawerContent.styles';
import { ThemeModeSwitch } from '../ThemeModeSwitch/ThemeModeSwitch';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components/native';
import { useState } from 'react';
import { View } from 'react-native';
import { subMenuDashboardRoutes } from '../../routes/stack.routes';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const [expandedMenus, setExpandedMenus] = useState<{
        [key: string]: boolean;
    }>({});

    const { logout } = useAuth();
    const theme = useTheme();

    const toggleSubMenu = (menuKey: string) => {
        setExpandedMenus((prevState) => ({
            [menuKey]: !prevState[menuKey],
        }));
    };
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <Container>
                <Header>
                    <PrimaryText>Pitch</PrimaryText>
                    <ThemeModeSwitch />
                </Header>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Dashboards"
                    icon={({ size }) => (
                        <Feather
                            name={
                                expandedMenus['dashboards']
                                    ? `chevron-down`
                                    : `chevron-right`
                            }
                            color={theme.primaryText}
                            size={size}
                        />
                    )}
                    labelStyle={{
                        color: theme.primaryText,
                    }}
                    onPress={() => {
                        toggleSubMenu('dashboards');
                    }}
                />
                {expandedMenus['dashboards'] && (
                    <View>
                        {subMenuDashboardRoutes.map((route) => {
                            return (
                                <DrawerItem
                                    label={route.label}
                                    key={route.name}
                                    style={{ marginLeft: 24 }}
                                    labelStyle={{ color: theme.secondaryText }}
                                    onPress={() =>
                                        props.navigation.navigate(
                                            'stackRoutes',
                                            { screen: route.name }
                                        )
                                    }
                                    icon={() => (
                                        <Feather
                                            name="minus"
                                            color={theme.primaryText}
                                            size={16}
                                        />
                                    )}
                                />
                            );
                        })}
                    </View>
                )}
                <DrawerItem
                    label="Sair"
                    icon={({ size }) => (
                        <Feather
                            name="log-out"
                            color={theme.primaryText}
                            size={size}
                        />
                    )}
                    labelStyle={{
                        color: theme.primaryText,
                    }}
                    onPress={() => {
                        logout();
                    }}
                />
            </Container>
        </DrawerContentScrollView>
    );
};
