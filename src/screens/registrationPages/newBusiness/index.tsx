import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Container, PrimaryText, Form, Section } from './newBusiness.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function NewBusiness() {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToHome = () => {
        navigation.navigate('stackRoutes', { screen: 'home' });
    };
    return (
        <Container>
            <BackButton />
            <Section>
                <PrimaryText>Adicionar novo negócio</PrimaryText>
                <Form>
                    <Input placeholder="Nome do contato ou empresa" />
                    <Input placeholder="Descrição (opcional)" />
                    <Input placeholder="Valor da negociação" />
                    <Button title="Confirmar" onPress={navigateToHome} />
                </Form>
            </Section>
        </Container>
    );
}
