import { selector } from 'recoil';
import { outputPreview } from './preview';

export const entries = selector({
    key: 'entries',
    get: ({ get }) => {
        const preview = get(outputPreview)
        return Object.entries(preview);
    },
});