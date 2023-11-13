import { createContext } from 'react';
export const DEFAULT_WEBAPP = typeof window !== 'undefined' && window?.Telegram?.WebApp
    ? window.Telegram.WebApp
    : null;
export const webAppContext = createContext(DEFAULT_WEBAPP);
export const DEFAULT_OPTIONS = {
    smoothButtonsTransition: false,
    smoothButtonsTransitionMs: 10,
};
export const optionsContext = createContext(DEFAULT_OPTIONS);
export const createSystemContextValue = () => ({
    MainButton: { current: null },
    BackButton: { current: null },
});
export const systemContext = createContext(createSystemContextValue());
