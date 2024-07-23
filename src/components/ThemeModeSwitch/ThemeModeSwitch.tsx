import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getThemeMode } from '../../selectors/getThemeMode';
import { useAppDispatch } from '../../utils/useAppDispatch';
import { ThemeModeEnum, setThemeMode } from '../../state/themeMode.slice';
import { StyledThemeContainer } from './ThemeModeSwitch.styles';
import { Feather } from '@expo/vector-icons';
import { dark, light } from '../../constants/theme';

const { LIGHT, DARK } = ThemeModeEnum;

export const ThemeModeSwitch = () => {
    const { themeMode } = useSelector(getThemeMode);
    const dispatch = useAppDispatch();

    const theme = themeMode === DARK ? dark : light;

    const handleTheme = () => {
        dispatch(setThemeMode(themeMode === DARK ? LIGHT : DARK));
    };

    return (
        <StyledThemeContainer onPress={handleTheme}>
            <Feather
                name={themeMode === DARK ? 'moon' : 'sun'}
                size={24}
                color={theme.primaryText}
            />
        </StyledThemeContainer>
    );
};
