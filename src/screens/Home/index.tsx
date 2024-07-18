import { ThemeModeSwitch } from '../../components/ThemeModeSwitch/ThemeModeSwitch';
import { Container, PrimaryText } from './Home.styles';

export default function Home() {
    return (
        <Container>
            <PrimaryText>Home</PrimaryText>
            <ThemeModeSwitch />
        </Container>
    );
}
