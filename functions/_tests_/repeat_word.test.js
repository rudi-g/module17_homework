import { repeatWord } from "../repeat_word.js";

describe('tests to check repeatWord func', () => {
    it('should repeat a word n-times', () => {
        expect(repeatWord('Name', 3)).toBe('Name1, Name2, Name3');
    });

    it('should exit from running if no word or count are passed', () => {
        expect(repeatWord('', 2)).toBe(undefined);
        expect(repeatWord('Name', 0)).toBe(undefined);
    });

    it('should check if the passed args are string and number', () => {
        expect(repeatWord(null, true)).toBe('The passing arguments have incorrect type');
    });
});