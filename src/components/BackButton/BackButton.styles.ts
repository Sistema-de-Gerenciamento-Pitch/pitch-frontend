import styled from 'styled-components/native';

interface BackButtonProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export const BackButtonContainer = styled.TouchableOpacity<BackButtonProps>`
    position: absolute;
    ${(props) => props.top !== undefined && `top: ${props.top}px;`}
    ${(props) => props.right !== undefined && `right: ${props.right}px;`}
    ${(props) => props.bottom !== undefined && `bottom: ${props.bottom}px;`}
    ${(props) => props.left !== undefined && `left: ${props.left}px;`}

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${(props) => props.theme.spacing.small};
`;

export const SecondaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.medium};
    color: ${(props) => props.theme.secondaryText};
    font-family: 'Roboto-Medium';
`;

export const IconButton = styled.TouchableOpacity`
    padding-left: ${(props) => props.theme.spacing.small};
    color: ${(props) => props.theme.secondaryText};
`;
