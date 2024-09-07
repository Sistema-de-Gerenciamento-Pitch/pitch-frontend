import styled from 'styled-components/native';

export const Container = styled.View`
    padding: ${(props) => props.theme.spacing.medium};
    background-color: ${(props) => props.theme.background};
    border-radius: 5px;
    height: 260px;
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const PrimaryText = styled.Text`
    font-family: 'LexendDeca-Regular';
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.primaryText};
`;

export const SecondaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Medium';
`;

export const Reminder = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${(props) => props.theme.spacing.medium};
`;

export const ReminderBody = styled.View`
    gap: 4px;
`;

export const ReminderDescription = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Light';
`;
