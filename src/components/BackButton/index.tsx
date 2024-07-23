import {
    BackButtonContainer,
    IconButton,
    SecondaryText,
} from './BackButton.styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { getThemeMode } from '../../selectors/getThemeMode';
import { dark, light } from '../../constants/theme';
import { FC } from 'react';

interface BackButtonProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

// defina um position: relative no componente pai onde o BackButton será executado
export const BackButton: FC<BackButtonProps> = ({
    top,
    right,
    bottom,
    left,
}) => {
    const navigation = useNavigation();

    const { themeMode } = useSelector(getThemeMode);
    const theme = themeMode === 'dark' ? dark : light;

    return (
        <BackButtonContainer
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            onPress={() => navigation.goBack()}
        >
            <IconButton>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={theme.secondaryText}
                />
            </IconButton>
            <SecondaryText> Voltar</SecondaryText>
        </BackButtonContainer>
    );
};
