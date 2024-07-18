import React from 'react';
import { TextInputProps } from 'react-native';
import { IconButton, InputContainer, StyledInput } from './Input.styles';
import { Feather } from '@expo/vector-icons';
import { getThemeMode } from '../../selectors/getThemeMode';
import { dark, light } from '../../constants/theme';
import { useSelector } from 'react-redux';

interface InputProps extends TextInputProps {
    icon?: keyof typeof Feather.glyphMap;
    iconOnPress?: () => void;
}

export const Input: React.FC<InputProps> = ({
    icon,
    iconOnPress,
    ...props
}) => {
    const { themeMode } = useSelector(getThemeMode);
    const theme = themeMode === 'dark' ? dark : light;
    return (
        <InputContainer>
            <StyledInput
                {...props}
                placeholderTextColor={theme.secondaryText}
            />
            {icon && (
                <IconButton onPress={iconOnPress}>
                    <Feather
                        name={icon}
                        size={24}
                        color={theme.secondaryText}
                    />
                </IconButton>
            )}
        </InputContainer>
    );
};
