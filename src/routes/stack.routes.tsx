import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Register from '../screens/register';
import Login from '../screens/login';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

interface StackRoutesProps {
    initialRouteName: 'profile' | 'register' | 'login';
}

export default function StackRoutes({ initialRouteName }: StackRoutesProps) {
    return (
        <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
    );
}
