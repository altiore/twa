import { useWebApp } from './core';
import { useCallback } from 'react';
/**
 * The hook provided showScanQrPopup function of the type {@link ShowScanQrPopupFunction} and closeScanQrPopup {@link CloseScanQrPopupFunction}.
 * @group Hooks
 */
const useScanQrPopup = () => {
    const WebApp = useWebApp();
    const showScanQrPopup = useCallback((...args) => WebApp?.showScanQrPopup?.(...args), [WebApp]);
    const closeScanQrPopup = useCallback(() => WebApp?.closeScanQrPopup?.(), [WebApp]);
    return [showScanQrPopup, closeScanQrPopup];
};
export default useScanQrPopup;
