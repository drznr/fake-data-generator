import { selector } from 'recoil';
import { output } from './atom';

export const outputSetter = selector({
    key: 'outputSetter',
    get: ({ get }) => get(output),
    set: ({ set }, newValue) => set(output, newValue)
});