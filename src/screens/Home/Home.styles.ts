import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    background-color: ${(props) => props.theme.background};
`;

export const PrimaryText = styled.Text`
    color: ${(props) => props.theme.primaryText};
`;
