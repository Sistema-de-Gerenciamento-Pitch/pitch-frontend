import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import Home from '../screens/Home';
import New from '../screens/New';
import { useSelector } from 'react-redux';
import { getThemeMode } from '../selectors/getThemeMode';
import { dark, light } from '../constants/theme';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={() => {
                const { themeMode } = useSelector(getThemeMode);
                const theme = themeMode === 'dark' ? dark : light;

                return {
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.secondaryBackground,
                        borderTopWidth: 0,
                        shadowOpacity: 0,
                        alignItems: 'center',
                        height: 70,
                    },
                    tabBarActiveTintColor: theme.support1,
                    tabBarInactiveTintColor: theme.primaryText,
                    tabBarLabelStyle: {
                        paddingBottom: 10,
                        paddingTop: 6,
                        marginTop: -10,
                        fontFamily: 'Roboto-Medium',
                    },
                    tabBarIconStyle: {
                        marginBottom: -10,
                    },
                };
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Início',
                }}
            />
            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="plus" size={size} color={color} />
                    ),
                    tabBarLabel: 'Adicionar',
                }}
            />
        </Tab.Navigator>
    );
}
