import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Container, PrimaryText, Form, Section } from './newCustomer.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function NewCustomer() {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToHome = () => {
        navigation.navigate('stackRoutes', { screen: 'home' });
    };
    return (
        <Container>
            <BackButton />
            <Section>
                <PrimaryText>Novo cliente</PrimaryText>
                <Form>
                    <Input placeholder="Nome do contato" />
                    <Input placeholder="Empresa (opcional)" />
                    <Input placeholder="Telefone para contato" />
                    <Button title="Confirmar" onPress={navigateToHome} />
                </Form>
            </Section>
        </Container>
    );
}
