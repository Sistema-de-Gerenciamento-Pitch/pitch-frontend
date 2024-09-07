import {
    Container,
    Footer,
    Form,
    Header,
    PrimaryText,
    SecondaryText,
    TextLink,
} from './Login.styles';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/auth';

export default function Login() {
    const { login } = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleNavigateToRegister = () => {
        navigation.navigate('register' as never);
    };

    return (
        <Container>
            <Header>
                <PrimaryText>Bem-vindo ao Pitch</PrimaryText>
                <SecondaryText>Potencialize suas vendas</SecondaryText>
            </Header>
            <Form>
                <SecondaryText>Entrar</SecondaryText>
                <Input
                    placeholder="E-mail ou telefone"
                    icon="user"
                    textContentType="emailAddress"
                />
                <Input
                    placeholder="Senha"
                    icon={isPasswordVisible ? 'eye-off' : 'eye'}
                    iconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    secureTextEntry={!isPasswordVisible}
                />
                <Button title="Acessar" icon="arrow-right" onPress={login} />
            </Form>
            <Footer>
                <SecondaryText>Ainda não possui uma conta?</SecondaryText>
                <TextLink onPress={handleNavigateToRegister}>
                    Cadastre-se aqui
                </TextLink>
            </Footer>
        </Container>
    );
}
