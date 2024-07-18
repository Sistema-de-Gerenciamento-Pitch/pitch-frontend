import styled from 'styled-components/native';

export const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    border-radius: 5px;
    padding: ${(props) => props.theme.spacing.medium};
`;

export const StyledInput = styled.TextInput`
    flex: 1;
    color: ${(props) => props.theme.primaryText};
    font-size: ${(props) => props.theme.spacing.medium};
`;

export const IconButton = styled.TouchableOpacity`
    padding-left: ${(props) => props.theme.spacing.small};
`;
