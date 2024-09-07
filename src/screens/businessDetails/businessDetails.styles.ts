import styled from 'styled-components/native';

interface PriorityProps {
    priority: string;
}

export const Container = styled.View`
    background-color: ${(props) => props.theme.secondaryBackground};
    padding: ${(props) => props.theme.spacing.xlarge};
    height: 100%;
    gap: ${(props) => props.theme.spacing.medium};
    flex: 1;
`;

export const Priority = styled.Text<PriorityProps>`
    color: ${(props) =>
        props.priority === 'alta'
            ? props.theme.error
            : props.priority === 'médio'
            ? props.theme.warning
            : props.theme.success};
    font-size: ${(props) => props.theme.spacing.medium};
    font-family: 'Roboto-Regular';
`;

export const Status = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Regular';
`;

export const PrimaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.large};
    color: ${(props) => props.theme.primaryText};
    font-family: 'LexendDeca-Regular';
`;

export const SecondaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Regular';
`;

export const Section = styled.View`
    margin-top: ${(props) => props.theme.spacing.medium};
    gap: ${(props) => props.theme.spacing.small};
`;

export const SectionHeader = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

export const Form = styled.View`
    gap: ${(props) => props.theme.spacing.small};
    margin-top: ${(props) => props.theme.spacing.medium};
`;
