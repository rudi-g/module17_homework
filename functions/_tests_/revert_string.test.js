import { revertString } from "../revert_string.js";

test(`reverts string 'строка' to be equal 'акортс'`, () => {
    expect(revertString('строка')).toBe('акортс');
});