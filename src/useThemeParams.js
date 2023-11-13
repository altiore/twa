import { useEffect, useState } from 'react';
import { useWebApp } from './core';
/**
 * The hook provided colorScheme and themeParams values of the type {@link ColorScheme} and {@link ThemeParams}.
 *
 * ```tsx
 * import { useThemeParams } from "@altiore/twa";
 *
 * const [colorScheme, themeParams] = useThemeParams();
 *
 * console.log(colorScheme === 'dark');
 * console.log({
 *     text_color: themeParams.text_color,
 *     button_color: themeParams.button_color,
 *     bg_color: themeParams.bg_color,
 * });
 * ```
 * @group Hooks
 */
const useThemeParams = () => {
    const WebApp = useWebApp();
    const [colorScheme, setColor] = useState(WebApp?.colorScheme);
    const [themeParams, setThemeParams] = useState(WebApp?.themeParams || {});
    useEffect(() => {
        if (!WebApp)
            return;
        const eventHandler = () => {
            setColor(WebApp.colorScheme);
            setThemeParams(WebApp.themeParams);
        };
        WebApp.onEvent('themeChanged', eventHandler);
        return () => {
            WebApp.offEvent('themeChanged', eventHandler);
        };
    }, [WebApp]);
    return [colorScheme, themeParams];
};
export default useThemeParams;
