export function repeatWord(word, count) {
    if (word === '' || count < 1) return;

    let words = '';

    for (let i = 1; i <= count; ++i) {
        words += word + i + ', ';
    }

    words = words.replace(/,\s$/g, '');

    return words;
}
