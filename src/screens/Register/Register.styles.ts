import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${(props) => props.theme.secondaryBackground};
    padding: ${(props) => props.theme.spacing.xlarge};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Header = styled.View`
    align-items: center;
    text-align: center;
    margin-bottom: ${(props) => props.theme.spacing.xlarge};
`;

export const PrimaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.xlarge};
    color: ${(props) => props.theme.primaryText};
    font-family: 'LexendDeca-Bold';
    width: 100%;
`;

export const SecondaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Medium';
`;

export const Form = styled.View`
    margin-top: ${(props) => props.theme.spacing.xlarge};
    align-items: center;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Footer = styled.View`
    margin-top: ${(props) => props.theme.spacing.xlarge};
    align-items: center;
`;

export const TextLink = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.support1};
    font-family: 'Roboto-Medium';
`;
