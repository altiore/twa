import React, { useEffect, useMemo, } from 'react';
import { webAppContext, optionsContext, systemContext, DEFAULT_OPTIONS, DEFAULT_WEBAPP, createSystemContextValue, } from './core';
/**
 * WebAppProvider provide context with WebApp for components and hooks.
 * Necessary to use only if you want to override `options`
 *
 * ```tsx
 * import { WebAppProvider } from "@altiore/twa";
 *
 * <WebAppProvider>
 *   <YourAppComponent />
 * </WebAppProvider>
 *
 * // You can pass options {@link Options}
 * <WebAppProvider
 *   options={{
 *     smoothButtonsTransition: true
 *   }}
 * >
 *   <YourAppComponent />
 * </WebAppProvider>
 * ```
 * @param props
 * @group React Components
 */
const WebAppProvider = ({ children, options, }) => {
    const mergedOptions = useMemo(() => ({
        ...DEFAULT_OPTIONS,
        ...options,
    }), [options]);
    const systemValue = useMemo(createSystemContextValue, []);
    useEffect(() => {
        if (!options?.smoothButtonsTransition)
            return;
        const forceHideButtons = () => {
            DEFAULT_WEBAPP?.MainButton?.hide();
            DEFAULT_WEBAPP?.BackButton?.hide();
        };
        window.addEventListener('beforeunload', forceHideButtons);
        return () => window.removeEventListener('beforeunload', forceHideButtons);
    }, [options?.smoothButtonsTransition]);
    return (React.createElement(systemContext.Provider, { value: systemValue },
        React.createElement(webAppContext.Provider, { value: DEFAULT_WEBAPP },
            React.createElement(optionsContext.Provider, { value: mergedOptions }, children))));
};
export default WebAppProvider;
