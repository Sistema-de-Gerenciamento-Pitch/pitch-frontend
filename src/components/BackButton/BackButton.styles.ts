import styled from 'styled-components/native';

export const BackButtonContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${(props) => props.theme.spacing.small};
    gap: 2px;
`;

export const SecondaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Medium';
`;

export const IconButton = styled.TouchableOpacity`
    color: ${(props) => props.theme.secondaryText};
    margin-top: 2px;
`;
