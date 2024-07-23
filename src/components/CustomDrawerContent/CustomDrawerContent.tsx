import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Container, Header, PrimaryText } from './CustomDrawerContent.styles';
import { ThemeModeSwitch } from '../ThemeModeSwitch/ThemeModeSwitch';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <Container>
                <Header>
                    <PrimaryText>Pitch</PrimaryText>
                    <ThemeModeSwitch />
                </Header>
                <DrawerItemList {...props} />
            </Container>
        </DrawerContentScrollView>
    );
};
