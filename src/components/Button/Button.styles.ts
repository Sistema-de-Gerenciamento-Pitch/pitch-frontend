import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.action};
    padding: ${(props) => props.theme.spacing.medium};
    border-radius: 5px;
    width: 100%;
`;

export const ButtonIcon = styled.View`
    padding-left: ${(props) => props.theme.spacing.small};
    margin-top: 2px;
`;

export const ButtonText = styled.Text`
    color: ${(props) => props.theme.primaryText};
    font-size: ${(props) => props.theme.spacing.medium};
    font-family: 'LexendDeca-Bold';
`;
