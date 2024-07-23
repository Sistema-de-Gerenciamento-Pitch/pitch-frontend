import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${(props) => props.theme.secondaryBackground};
    padding: ${(props) => props.theme.spacing.xlarge};
    height: 100%;
`;

export const PrimaryText = styled.Text`
    font-size: ${(props) => props.theme.spacing.large};
    color: ${(props) => props.theme.primaryText};
    font-family: 'LexendDeca-Regular';
`;

export const Section = styled.View`
    margin-top: ${(props) => props.theme.spacing.medium};
`;

export const SectionHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const SectionBody = styled.View``;
