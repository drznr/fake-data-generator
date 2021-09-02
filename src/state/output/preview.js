import { selector } from 'recoil';
import { output } from './atom';

export const outputPreview = selector({
    key: 'outputPreview',
    get: ({ get }) => {
        const copy = { ...get(output) };
        Object.entries(copy).forEach(([ key, value ]) => {
            if (typeof value === 'function') copy[key] = value();
        });
        return copy;
    }
});