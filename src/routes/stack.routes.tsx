import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Login from '../screens/Login';

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
        </Stack.Navigator>
    );
}
