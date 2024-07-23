import styled from 'styled-components/native';

interface ButtonProps {
    padding: number;
}

interface ButtonTextProps {
    fontSize: number;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.action};
    padding: ${(props) => props.padding}px;
    border-radius: 5px;
    width: 100%;
`;

export const ButtonIcon = styled.View`
    padding-left: ${(props) => props.theme.spacing.small};
    margin-top: 2px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
    color: ${(props) => props.theme.primaryText};
    font-size: ${(props) => props.fontSize}px;
    font-family: 'LexendDeca-Bold';
`;
