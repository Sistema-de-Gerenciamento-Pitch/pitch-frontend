import {
    Container,
    Footer,
    Form,
    Header,
    PrimaryText,
    SecondaryText,
    TextLink,
} from './Register.styles';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BackButton } from '../../components/BackButton';
import { useAuth } from '../../hooks/auth';

export default function Register() {
    const { login } = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleNavigateToRegister = () => {
        navigation.navigate('login' as never);
    };

    return (
        <Container>
            <Form>
                <SecondaryText>Crie sua conta em poucos passos</SecondaryText>
                <Input
                    placeholder="Nome do usuário"
                    icon="user"
                    textContentType="emailAddress"
                />
                <Input
                    placeholder="E-mail ou telefone"
                    icon="at-sign"
                    textContentType="emailAddress"
                />
                <Input
                    placeholder="Senha"
                    icon={isPasswordVisible ? 'eye-off' : 'eye'}
                    iconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    secureTextEntry={!isPasswordVisible}
                />
                <Button
                    title="Criar conta"
                    icon="arrow-right"
                    onPress={login}
                />
            </Form>
            <Footer>
                <SecondaryText>
                    Já possui uma conta?{' '}
                    <TextLink onPress={handleNavigateToRegister}>
                        Entrar
                    </TextLink>
                </SecondaryText>
            </Footer>
        </Container>
    );
}
