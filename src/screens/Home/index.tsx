import { View } from 'react-native';
import { ThemeModeSwitch } from '../../components/ThemeModeSwitch/ThemeModeSwitch';
import { Container, PrimaryText, Section, SectionHeader } from './Home.styles';
import { Button } from '../../components/Button';
import { Board } from '../../components/Board';

export default function Home() {
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
                    />
                </SectionHeader>
                <Board />
            </Section>
        </Container>
    );
}
