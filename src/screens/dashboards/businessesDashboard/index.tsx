import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import {
    Container,
    PrimaryText,
    Form,
    Section,
    SectionHeader,
} from './businessesDashboard.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function BusinessesDashboard() {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToHome = () => {
        navigation.navigate('stackRoutes', { screen: 'home' });
    };

    const navigateToNewBusiness = () => {
        navigation.navigate('stackRoutes', { screen: 'newBusiness' });
    };
    return (
        <Container>
            <BackButton />
            <Section>
                <SectionHeader>
                    <PrimaryText>Negócios</PrimaryText>
                    <Button
                        title="Novo"
                        icon="plus"
                        padding={8}
                        fontSize={14}
                        style={{ width: 'auto' }}
                        onPress={navigateToNewBusiness}
                    />
                </SectionHeader>
                <Form>
                    <Input placeholder="Título" />
                    <Input placeholder="Data" />
                    <Button title="Confirmar" onPress={navigateToHome} />
                </Form>
            </Section>
        </Container>
    );
}
