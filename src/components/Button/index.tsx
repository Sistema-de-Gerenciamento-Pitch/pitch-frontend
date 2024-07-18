import { Feather } from '@expo/vector-icons';
import { ButtonContainer, ButtonIcon, ButtonText } from './Button.styles';
import { TouchableOpacityProps } from 'react-native';
import { FC } from 'react';
import { getThemeMode } from '../../selectors/getThemeMode';
import { useSelector } from 'react-redux';
import { dark, light } from '../../constants/theme';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    icon?: keyof typeof Feather.glyphMap;
    buttonOnPress?: () => void;
}

export const Button: FC<ButtonProps> = ({
    title,
    icon,
    buttonOnPress,
    ...props
}) => {
    const { themeMode } = useSelector(getThemeMode);
    const theme = themeMode === 'dark' ? dark : light;
    return (
        <ButtonContainer {...props}>
            <ButtonText>{title}</ButtonText>
            {icon && (
                <ButtonIcon>
                    <Feather name={icon} size={24} color={theme.primaryText} />
                </ButtonIcon>
            )}
        </ButtonContainer>
    );
};
