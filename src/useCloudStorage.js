import { useWebApp } from './core';
import { useCallback, useMemo } from 'react';
/**
 * This hook provides {@link telegram!CloudStorage} object with promises functions,
 * so you don't have to pass `callback` argument
 * You have to look original description CloudStorage object in {@link telegram!CloudStorage}
 * @group Hooks
 */
const useCloudStorage = () => {
    const webApp = useWebApp();
    const cloudStorage = useMemo(() => webApp?.CloudStorage, [webApp]);
    const getItem = useCallback(key => new Promise((resolve, reject) => {
        if (cloudStorage) {
            return cloudStorage.getItem(key, (error, value) => {
                if (!error) {
                    resolve(value);
                }
                else {
                    reject(error);
                }
            });
        }
        reject('No CloudStorage. Perhaps, TWA not supported');
    }), [cloudStorage]);
    const setItem = useCallback((key, value) => new Promise((resolve, reject) => {
        if (cloudStorage) {
            return cloudStorage?.setItem(key, value, (error, state) => {
                if (!error && state) {
                    resolve();
                }
                else {
                    reject(error);
                }
            });
        }
        reject('No CloudStorage. Perhaps, TWA not supported');
    }), [cloudStorage]);
    const getItems = useCallback(key => new Promise((resolve, reject) => {
        if (cloudStorage) {
            return cloudStorage.getItems(key, (error, value) => {
                if (!error && value) {
                    resolve(value);
                }
                else {
                    reject(error);
                }
            });
        }
        reject('No CloudStorage. Perhaps, TWA not supported');
    }), [cloudStorage]);
    const removeItem = useCallback(key => new Promise((resolve, reject) => {
        if (cloudStorage) {
            return cloudStorage.removeItem(key, (error, state) => {
                if (!error && state) {
                    resolve();
                }
                else {
                    reject(error);
                }
            });
        }
        reject('No CloudStorage. Perhaps, TWA not supported');
    }), [cloudStorage]);
    const removeItems = useCallback(key => new Promise((resolve, reject) => {
        if (cloudStorage) {
            return cloudStorage.removeItems(key, (error, state) => {
                if (!error && state) {
                    resolve();
                }
                else {
                    reject(error);
                }
            });
        }
        reject('No CloudStorage. Perhaps, TWA not supported');
    }), [cloudStorage]);
    const getKeys = useCallback(() => new Promise((resolve, reject) => {
        if (cloudStorage) {
            return cloudStorage.getKeys((error, state) => {
                if (!error && state) {
                    resolve(state);
                }
                else {
                    reject(error);
                }
            });
        }
        reject('No CloudStorage. Perhaps, TWA not supported');
    }), [cloudStorage]);
    return useMemo(() => ({
        getItem,
        setItem,
        getItems,
        removeItem,
        removeItems,
        getKeys,
    }), 
    // Осознанно в зависимостях только cloudStorage
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cloudStorage]);
};
export default useCloudStorage;
