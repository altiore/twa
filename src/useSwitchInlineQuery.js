import { useWebApp } from './core';
import { useCallback } from 'react';
/**
 * This hook that provided {@link SwitchInlineQueryFunction}
 * You have to look original description switchInlineQuery in {@link telegram!WebApp}, because hook just implements his.
 * @return {SwitchInlineQueryFunction}
 * @group Hooks
 */
const useSwitchInlineQuery = () => {
    const WebApp = useWebApp();
    return useCallback((...args) => WebApp?.switchInlineQuery?.(...args), [WebApp]);
};
export default useSwitchInlineQuery;
