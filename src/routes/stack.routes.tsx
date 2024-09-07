import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewBusiness from '../screens/registrationPages/newBusiness';
import NewReminder from '../screens/registrationPages/newReminder';
import NewCustomer from '../screens/registrationPages/newCustomer';
import NewProduct from '../screens/registrationPages/newProduct';
import CustomersDashboard from '../screens/dashboards/customersDashboard';
import BusinessesDashboard from '../screens/dashboards/businessesDashboard';
import RemindersDashboard from '../screens/dashboards/remindersDashboard';
import ProductsDashboard from '../screens/dashboards/productsDashboard';
import TabRoutes from './tab.routes';
import BusinessDetails from '../screens/businessDetails';

const Stack = createNativeStackNavigator();

export const subMenuDashboardRoutes = [
    {
        name: 'businessesDashboard',
        component: BusinessesDashboard,
        label: 'Negócios',
    },
    {
        name: 'customersDashboard',
        component: CustomersDashboard,
        label: 'Clientes',
    },
    {
        name: 'remindersDashboard',
        component: RemindersDashboard,
        label: 'Lembretes',
    },
    {
        name: 'productsDashboard',
        component: ProductsDashboard,
        label: 'Produtos',
    },
];
export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={TabRoutes} />
            {subMenuDashboardRoutes.map((route) => {
                return (
                    <Stack.Screen
                        name={route.name}
                        key={route.name}
                        component={route.component}
                    />
                );
            })}
            <Stack.Screen name="newBusiness" component={NewBusiness} />
            <Stack.Screen name="newReminder" component={NewReminder} />
            <Stack.Screen name="newCustomer" component={NewCustomer} />
            <Stack.Screen name="newProduct" component={NewProduct} />
            <Stack.Screen name="businessDetails" component={BusinessDetails} />
        </Stack.Navigator>
    );
}
