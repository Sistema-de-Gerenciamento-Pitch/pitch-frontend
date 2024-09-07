import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Container, PrimaryText, Form, Section } from './newProduct.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function NewProduct() {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToHome = () => {
        navigation.navigate('stackRoutes', { screen: 'home' });
    };
    return (
        <Container>
            <BackButton />
            <Section>
                <PrimaryText>Novo produto</PrimaryText>
                <Form>
                    <Input placeholder="Nome" />
                    <Input placeholder="Custo" />
                    <Button title="Confirmar" onPress={navigateToHome} />
                </Form>
            </Section>
        </Container>
    );
}
