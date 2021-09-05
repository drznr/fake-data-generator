import { selector } from 'recoil';
import { output } from './atom';

export const isEmpty = selector({
    key: 'isEmpty',
    get: ({ get }) => !Object.keys(get(output)).length
});