import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/register';
import DrawerRoutes from './drawer.routes';

const AuthStack = createNativeStackNavigator();

export default function AuthStackRoutes() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="login" component={Login} />
            <AuthStack.Screen name="register" component={Register} />
        </AuthStack.Navigator>
    );
}
