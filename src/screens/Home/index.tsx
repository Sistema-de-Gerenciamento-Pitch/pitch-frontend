import { Container, PrimaryText, Section, SectionHeader } from './Home.styles';
import { Button } from '../../components/Button';
import { Board } from '../../components/Board';
import { Reminders } from '../../components/Reminders';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export default function Home() {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToNewBusiness = () => {
        navigation.navigate('stackRoutes', { screen: 'newBusiness' });
    };
    return (
        <Container>
            <Section>
                <SectionHeader>
                    <PrimaryText>Meus negócios</PrimaryText>
                    <Button
                        title="Novo"
                        icon="plus"
                        padding={8}
                        fontSize={14}
                        style={{ width: 'auto' }}
                        onPress={navigateToNewBusiness}
                    />
                </SectionHeader>
                <Board />
            </Section>
            <Reminders />
        </Container>
    );
}
