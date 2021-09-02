import { selector } from 'recoil';
import { entityName } from './atom';

export const entityNameSetter = selector({
    key: 'entityNameSetter',
    get: ({ get }) => get(entityName),
    set: ({ set }, newValue) => set(entityName, newValue)
});