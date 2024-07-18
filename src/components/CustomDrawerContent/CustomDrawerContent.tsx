import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Container, PrimaryText } from './CustomDrawerContent.styles';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <Container>
                <PrimaryText>Pitch</PrimaryText>
                <DrawerItemList {...props} />
            </Container>
        </DrawerContentScrollView>
    );
};
