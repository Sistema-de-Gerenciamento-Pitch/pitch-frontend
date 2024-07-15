import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import Feed from '../screens/Feed';
import New from '../screens/New';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="feed"
                component={Feed}
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
