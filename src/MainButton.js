import { useContext, useEffect, useId, useMemo } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';
/**
 * Renders a {@link telegram!MainButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { MainButton } from "@altiore/twa";
 *
 * <MainButton
 *     text="CLICK ME"
 *     onClick={() => console.log('Hello, I am button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const MainButton = ({ text = 'CONTINUE', progress = false, disable: disable_old, disabled: disable_new = false, color, textColor, onClick, }) => {
    const system = useContext(systemContext);
    const buttonId = useId();
    const WebApp = useWebApp();
    const MainButton = useMemo(() => WebApp?.MainButton, [WebApp]);
    const themeParams = useMemo(() => WebApp?.themeParams, [WebApp]);
    const disabled = useMemo(() => disable_old || disable_new, [disable_old, disable_new]);
    useEffect(() => {
        MainButton?.setParams({
            color: color || themeParams?.button_color || '#fff',
        });
    }, [color, themeParams, MainButton]);
    useEffect(() => {
        MainButton?.setParams({
            text_color: textColor || themeParams?.button_text_color || '#000',
        });
    }, [MainButton, themeParams, textColor]);
    useEffect(() => {
        MainButton?.setText(text);
    }, [text, MainButton]);
    useEffect(() => {
        if (disabled) {
            MainButton?.disable();
        }
        else if (!disabled) {
            MainButton?.enable();
        }
    }, [disabled, MainButton]);
    useEffect(() => {
        if (progress) {
            MainButton?.showProgress(false);
        }
        else if (!progress) {
            MainButton?.hideProgress();
        }
    }, [progress, MainButton]);
    useEffect(() => {
        if (!onClick) {
            return;
        }
        MainButton?.onClick(onClick);
        return () => {
            MainButton?.offClick(onClick);
        };
    }, [onClick, MainButton]);
    useSmoothButtonsTransition({
        show: MainButton?.show,
        hide: MainButton?.hide,
        currentShowedIdRef: system.MainButton,
        id: buttonId,
    });
    return null;
};
export default MainButton;
