import { useRoute } from '@react-navigation/native';
import {
    Container,
    PrimaryText,
    Section,
    SecondaryText,
    Priority,
    SectionHeader,
    Status,
} from './businessDetails.styles';
import { BackButton } from '../../components/BackButton';

interface Task {
    id: string;
    title: string;
    status: string;
    description: string;
    priority: string;
}

export default function BusinessDetails() {
    const route = useRoute();
    const { task } = route.params as { task: Task };

    return (
        <Container>
            <BackButton />
            <Section>
                <SectionHeader>
                    <Priority priority={task.priority}>
                        Prioridade: {task.priority}
                    </Priority>
                    <Status>Status: {task.status}</Status>
                </SectionHeader>
                <PrimaryText>{task.title}</PrimaryText>
                <SecondaryText>{task.description}</SecondaryText>
            </Section>
        </Container>
    );
}
