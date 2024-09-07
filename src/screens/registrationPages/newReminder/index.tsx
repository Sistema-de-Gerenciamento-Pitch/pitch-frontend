import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Container, PrimaryText, Form, Section } from './newReminder.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function NewReminder() {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToHome = () => {
        navigation.navigate('stackRoutes', { screen: 'home' });
    };
    return (
        <Container>
            <BackButton />
            <Section>
                <PrimaryText>Adicionar novo lembrete</PrimaryText>
                <Form>
                    <Input placeholder="Título" />
                    <Input placeholder="Data" />
                    <Button title="Confirmar" onPress={navigateToHome} />
                </Form>
            </Section>
        </Container>
    );
}
