import { FlatList, ScrollView, Text, View } from 'react-native';
import {
    Card,
    CardDescription,
    CardHeader,
    CardPriority,
    CardStatus,
    CardTitle,
    Column,
    ColumnBody,
    ColumnTitle,
    Container,
} from './Board.styles';
import { FontAwesome } from '@expo/vector-icons/';
import { useSelector } from 'react-redux';
import { getThemeMode } from '../../selectors/getThemeMode';
import { dark, light } from '../../constants/theme';

interface Task {
    id: string;
    title: string;
    status: string;
    description: string;
    priority: string;
}

interface ColumnProps {
    id: string;
    title: string;
    tasks: Task[];
}

interface BoardData {
    board: {
        id: string;
        title: string;
        columns: ColumnProps[];
    };
}

export const Board = () => {
    const { themeMode } = useSelector(getThemeMode);
    const theme = themeMode === 'dark' ? dark : light;

    const data: BoardData = {
        board: {
            id: 'board-1',
            title: 'Quadro de Gerenciamento de Projetos',
            columns: [
                {
                    id: 'column-1',
                    title: 'A Fazer',
                    tasks: [
                        {
                            id: 'task-1',
                            title: 'Configurar repositório do projeto',
                            description:
                                'Criar o repositório principal no GitHub e configurar a estrutura inicial do projeto.',
                            status: 'pendente',
                            priority: 'alta',
                        },
                        {
                            id: 'task-2',
                            title: 'Coletar requisitos',
                            description:
                                'Coletar todos os requisitos dos stakeholders.',
                            status: 'pendente',
                            priority: 'média',
                        },
                    ],
                },
                {
                    id: 'column-2',
                    title: 'Em Progresso',
                    tasks: [
                        {
                            id: 'task-3',
                            title: 'Desenhar o esquema do banco de dados',
                            description:
                                'Desenhar o esquema inicial do banco de dados para a aplicação.',
                            status: 'em progresso',
                            priority: 'alta',
                        },
                        {
                            id: 'task-4',
                            title: 'Desenvolver autenticação de usuário',
                            description:
                                'Implementar o módulo de autenticação de usuário.',
                            status: 'em progresso',
                            priority: 'alta',
                        },
                    ],
                },
                {
                    id: 'column-3',
                    title: 'Concluído',
                    tasks: [
                        {
                            id: 'task-5',
                            title: 'Criar wireframes',
                            description:
                                'Desenhar os wireframes iniciais para as principais páginas da aplicação.',
                            status: 'concluído',
                            priority: 'média',
                        },
                        {
                            id: 'task-6',
                            title: 'Configurar pipeline de CI/CD',
                            description:
                                'Configurar o pipeline de Integração Contínua e Deploy Contínuo.',
                            status: 'concluído',
                            priority: 'alta',
                        },
                    ],
                },
            ],
        },
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Container>
                {data.board.columns.map((column) => (
                    <Column key={column.id}>
                        <ColumnTitle>{column.title}</ColumnTitle>
                        <ColumnBody>
                            <FlatList
                                data={column.tasks}
                                renderItem={({ item }: { item: Task }) => (
                                    <Card>
                                        <CardHeader>
                                            <CardStatus>
                                                Status: {item.status}
                                            </CardStatus>
                                            <FontAwesome
                                                name="hand-grab-o"
                                                size={16}
                                                color={theme.secondaryText}
                                            />
                                        </CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>
                                            {item.description}
                                        </CardDescription>
                                    </Card>
                                )}
                                keyExtractor={(item: Task) => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </ColumnBody>
                    </Column>
                ))}
            </Container>
        </ScrollView>
    );
};
