import React, { useEffect } from 'react';
import { StatusBar, Appearance } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { useSelector } from 'react-redux';
import { CustomThemeProps, light, dark } from '../constants/theme';
import { getThemeMode } from '../selectors/getThemeMode';
import { ThemeModeEnum, setThemeMode } from '../state/themeMode.slice';
import { useAppDispatch } from '../utils/useAppDispatch';

const StyledThemeContainer = styled.KeyboardAvoidingView<CustomThemeProps>`
    flex: 1;
    background-color: ${(props) => props.theme.secondaryBackground};
`;

const { DARK, LIGHT } = ThemeModeEnum;

export const ThemeManager = ({ children }: { children: React.ReactNode }) => {
    const { themeMode } = useSelector(getThemeMode);
    const dispatch = useAppDispatch();
    const providedTheme = () => {
        if (themeMode === DARK) {
            return dark;
        }
        if (themeMode === LIGHT) {
            return light;
        }
    };
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            dispatch(setThemeMode(colorScheme as ThemeModeEnum));
        });
        return () => subscription.remove();
    }, [dispatch]);
    return (
        <ThemeProvider theme={providedTheme}>
            <StatusBar
                barStyle={themeMode === DARK ? 'light-content' : 'dark-content'}
            />
            <StyledThemeContainer>{children}</StyledThemeContainer>
        </ThemeProvider>
    );
};
