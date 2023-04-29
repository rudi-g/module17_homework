export function revertString(string) {
    let reverted = '';
    
    for (let i = string.length-1; i >= 0; i--) {
        reverted += string[i];
    }

    return reverted;
}