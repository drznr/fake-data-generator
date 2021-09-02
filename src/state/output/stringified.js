import { selector } from 'recoil';
import { outputPreview } from './preview';

export const stringified = selector({
    key: 'stringified',
    get: ({ get }) => {
        const preview = get(outputPreview);
        return JSON.stringify(preview, null, '\t');
    }
});