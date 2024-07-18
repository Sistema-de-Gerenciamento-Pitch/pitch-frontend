export const dark = {
    background: '#121212', // Fundo Principal
    secondaryBackground: '#1C1C1E', // Fundo de Componentes Secundários
    primaryText: '#F0EDEE', // Texto Principal
    secondaryText: '#CCCCCC', // Texto Secundário
    action: '#1A6A73', // Botões e Links de Ação
    support1: '#428494', // Elementos de Suporte 1
    support2: '#90DDF0', // Elementos de Suporte 2
    error: '#CF6679', // Alertas e Erros
    warning: '#FFAB40', // Avisos
    success: '#81C784', // Mensagens de Sucesso
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
        xlarge: '32px',
    },
};

export const light = {
    background: '#F0EDEE', // Fundo Principal
    secondaryBackground: '#FFFFFF', // Fundo de Componentes Secundários
    primaryText: '#0A090C', // Texto Principal
    secondaryText: '#07393C', // Texto Secundário
    action: '#90DDF0', // Botões e Links de Ação
    support1: '#2C666E', // Elementos de Suporte 1
    support2: '#90DDF0', // Elementos de Suporte 2
    error: '#D32F2F', // Alertas e Erros
    warning: '#FFA726', // Avisos
    success: '#388E3C', // Mensagens de Sucesso
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
        xlarge: '32px',
    },
};

type Theme = {
    background: typeof dark.background | typeof light.background;
    secondaryBackground:
        | typeof dark.secondaryBackground
        | typeof light.secondaryBackground;
    primaryText: typeof dark.primaryText | typeof light.primaryText;
    secondaryText: typeof dark.secondaryText | typeof light.secondaryText;
    action: typeof dark.action | typeof light.action;
    support1: typeof dark.support1 | typeof light.support1;
    support2: typeof dark.support2 | typeof light.support2;
    error: typeof dark.error | typeof light.error;
    warning: typeof dark.warning | typeof light.warning;
    success: typeof dark.success | typeof light.success;
    spacing: {
        small: '8px';
        medium: '16px';
        large: '24px';
        xlarge: '32px';
    };
};

export interface CustomThemeProps {
    theme?: Theme;
}
