import { useWebApp } from './core';
/**
 * This hook provides `initDataUnsafe` and `initData`
 * You have to look original description in {@link telegram!WebApp}, because hook just return this.
 *
 * ```tsx
 * import { useInitData } from "@altiore/twa";
 *
 * const [initDataUnsafe] = useInitData();
 * const [initDataUnsafe, initData] = useInitData();
 *
 * ```
 * @group Hooks
 */
const useInitData = () => {
    const WebApp = useWebApp();
    return [WebApp.initDataUnsafe, WebApp.initData];
};
export default useInitData;
