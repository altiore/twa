import { useCallback } from 'react';
import { useWebApp } from './core';
/**
 * The hook provided showPopup function of the type {@link ShowPopupFunction}.
 * The function that shows a native popup described by the params argument of the type {@link ShowPopupParams}.
 *
 * ```tsx
 * import { useShowPopup } from "@altiore/twa";
 *
 * const showPopup = useShowPopup();
 *
 * showPopup({ message: 'Hello world' }).then((buttonId) => console.log(buttonId));
 * ```
 *
 * @group Hooks
 */
const useShowPopup = () => {
    const WebApp = useWebApp();
    return useCallback(params => new Promise((resolve, reject) => {
        try {
            WebApp?.showPopup?.(params, (buttonId) => {
                resolve(buttonId);
            });
        }
        catch (e) {
            reject(e);
        }
    }), [WebApp]);
};
export default useShowPopup;
