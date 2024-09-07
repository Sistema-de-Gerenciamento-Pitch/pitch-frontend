import {
    FlatList,
    Text,
    Touchable,
    TouchableNativeFeedback,
    View,
} from 'react-native';
import {
    Container,
    Header,
    PrimaryText,
    Reminder,
    ReminderBody,
    ReminderDescription,
    SecondaryText,
} from './Reminders.styles';
import { Button } from '../Button';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CheckboxProps {
    item: number;
    isChecked: boolean;
}

export const Reminders = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const data = {
        tasks: [
            {
                id: 1,
                description: 'Enviar mensagem para fulano de tal',
                date: '25/07/2024',
                time: '11:30',
                completed: false,
            },
            {
                id: 2,
                description: 'Ligação para tal pessoa',
                date: '30/07/2024',
                time: '13:30',
                completed: false,
            },
            {
                id: 3,
                description: 'Cobrar fulano para fazer a instalação',
                date: '30/07/2024',
                time: '13:30',
                completed: false,
            },
            {
                id: 4,
                description: 'Reunião com equipe de marketing',
                date: '01/08/2024',
                time: '09:00',
                completed: false,
            },
            {
                id: 5,
                description: 'Enviar relatório mensal para o gerente',
                date: '02/08/2024',
                time: '10:00',
                completed: true,
            },
            {
                id: 6,
                description: 'Agendar reunião com fornecedor',
                date: '05/08/2024',
                time: '14:00',
                completed: false,
            },
            {
                id: 7,
                description: 'Revisar contrato de prestação de serviços',
                date: '07/08/2024',
                time: '11:00',
                completed: false,
            },
            {
                id: 8,
                description: 'Atualizar site da empresa',
                date: '10/08/2024',
                time: '15:00',
                completed: false,
            },
        ],
    };

    const navigateToNewReminder = () => {
        navigation.navigate('stackRoutes', { screen: 'newReminder' });
    };

    const [tasks, setTasks] = useState(data.tasks);

    const handleCompleteTask = (item: number) => {
        const updatedTasks = [...tasks];

        updatedTasks[item].completed = !updatedTasks[item].completed;
        setTasks(updatedTasks);
    };
    return (
        <Container>
            <Header>
                <PrimaryText>Lembretes importantes</PrimaryText>
                <Button
                    title="Novo"
                    icon="plus"
                    padding={8}
                    fontSize={14}
                    style={{ width: 'auto' }}
                    onPress={navigateToNewReminder}
                />
            </Header>
            <FlatList
                data={tasks}
                renderItem={({ item, index }) => (
                    <TouchableNativeFeedback
                        onPress={() => handleCompleteTask(index)}
                    >
                        <Reminder key={index}>
                            <View>
                                <Checkbox
                                    value={item.completed}
                                    onValueChange={() =>
                                        handleCompleteTask(index)
                                    }
                                    style={{ padding: 8 }}
                                />
                            </View>
                            <ReminderBody>
                                <SecondaryText>
                                    {item.description}
                                </SecondaryText>
                                <ReminderDescription>
                                    {item.date} | {item.time}
                                </ReminderDescription>
                            </ReminderBody>
                        </Reminder>
                    </TouchableNativeFeedback>
                )}
                showsVerticalScrollIndicator
                contentContainerStyle={{ gap: 8 }}
            />
        </Container>
    );
};
