import { selector } from 'recoil';
import { entitiesLength } from './atom';

export const entitiesLengthSetter = selector({
    key: 'entitiesLengthSetter',
    get: ({ get }) => get(entitiesLength),
    set: ({ set }, newValue) => set(entitiesLength, newValue)
});