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

export const BackButton = () => {
    const navigation = useNavigation();

    const { themeMode } = useSelector(getThemeMode);
    const theme = themeMode === 'dark' ? dark : light;

    return (
        <BackButtonContainer onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={16} color={theme.secondaryText} />
            <SecondaryText> Voltar</SecondaryText>
        </BackButtonContainer>
    );
};
