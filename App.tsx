import 'react-native-gesture-handler';

import Routes from './src/routes';
import { ThemeManager } from './src/components/ThemeManager';
import { Provider } from 'react-redux';
import { store } from './src/state';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeManager>
                <Routes />
            </ThemeManager>
        </Provider>
    );
}
