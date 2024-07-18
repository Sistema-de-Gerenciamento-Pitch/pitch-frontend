import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 0;
    padding: 16px 0;
    background-color: ${(props) => props.theme.secondaryBackground};
    height: 100%;
`;

export const PrimaryText = styled.Text`
    font-family: 'LexendDeca-ExtraBold';
    font-size: 32px;
    margin-bottom: 32px;
    text-align: center;
    color: ${(props) => props.theme.primaryText};
`;
