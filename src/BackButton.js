import { useContext, useEffect, useId, useMemo } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';
/**
 * Renders a {@link telegram!BackButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { BackButton } from "@altiore/twa";
 *
 * <BackButton
 *     onClick={() => console.log('Hello, I am back button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const BackButton = ({ onClick }) => {
    const system = useContext(systemContext);
    const buttonId = useId();
    const WebApp = useWebApp();
    const BackButton = useMemo(() => WebApp?.BackButton, [WebApp]);
    useEffect(() => {
        if (!onClick || !BackButton) {
            return;
        }
        BackButton.onClick(onClick);
        return () => {
            BackButton.offClick(onClick);
        };
    }, [onClick, BackButton]);
    useSmoothButtonsTransition({
        show: BackButton?.show,
        hide: BackButton?.hide,
        currentShowedIdRef: system.BackButton,
        id: buttonId,
    });
    return null;
};
export default BackButton;
