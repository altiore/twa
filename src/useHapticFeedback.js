import { useWebApp } from './core';
import { useCallback, useMemo } from 'react';
/**
 * This hook that provided {@link ImpactOccurredFunction}, {@link NotificationOccurredFunction} and
 * {@link SelectionChangedFunction} functions that controls haptic feedback. You have to look
 * original telegram description {@link telegram!HapticFeedback}, because it Hook implementing his.
 *
 * ```tsx
 * import { useHapticFeedback } from "@altiore/twa";
 *
 * const [impactOccurred, notificationOccurred, selectionChanged] =
 *     useHapticFeedback();
 * // const [,notificationOccurred] = useHapticFeedback();
 *
 * impactOccurred('heavy');
 * notificationOccurred('success');
 * ```
 *
 * @group Hooks
 */
const useHapticFeedback = () => {
    const WebApp = useWebApp();
    const HapticFeedback = useMemo(() => {
        return WebApp?.HapticFeedback;
    }, [WebApp]);
    const impactOccurred = useCallback((style) => HapticFeedback?.impactOccurred(style), [HapticFeedback]);
    const notificationOccurred = useCallback((type) => HapticFeedback?.notificationOccurred(type), [HapticFeedback]);
    const selectionChanged = useCallback(() => HapticFeedback?.selectionChanged(), [HapticFeedback]);
    return { impactOccurred, notificationOccurred, selectionChanged };
};
export default useHapticFeedback;
