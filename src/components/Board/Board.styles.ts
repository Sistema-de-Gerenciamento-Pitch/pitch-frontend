import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
`;

export const Column = styled.View`
    height: 260px;
    width: 240px;
    background-color: ${(props) => props.theme.background};
    border-radius: 5px;
`;

export const ColumnTitle = styled.Text`
    color: ${(props) => props.theme.primaryText};
    padding: ${(props) => props.theme.spacing.medium};
    font-size: ${(props) => props.theme.spacing.medium};
    font-family: 'Roboto-Medium';
`;

export const ColumnBody = styled.View`
    padding: 0 16px 16px;
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    padding: ${(props) => props.theme.spacing.medium};
    margin-bottom: ${(props) => props.theme.spacing.small};
    border-radius: 5px;
    background-color: ${(props) => props.theme.secondaryBackground};
    border: 0.4px solid ${(props) => props.theme.support1};
    gap: 4px;
    elevation: 2;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.Text`
    color: ${(props) => props.theme.primaryText};
    font-family: 'Roboto-Medium';
    font-size: ${(props) => props.theme.spacing.medium};
`;

export const CardDescription = styled.Text`
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Regular';
`;

export const CardStatus = styled.Text`
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Light';
`;

export const CardPriority = styled.Text`
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Light';
`;

export const EmptyCard = styled.View`
    border: 1px dashed ${(props) => props.theme.secondaryText};
    padding: ${(props) => props.theme.spacing.medium};
    border-radius: 5px;
`;
