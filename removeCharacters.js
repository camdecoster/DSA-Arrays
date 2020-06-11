function removeCharacters(str, charsToRemove) {
    let newStr = "";
    let removeChar;
    for (let i = 0; i < str.length; i++) {
        removeChar = false;
        for (let j = 0; j < charsToRemove.length; j++) {
            if (str.slice(i, i + 1) === charsToRemove.slice(j, j + 1)) {
                removeChar = true;
                break;
            }
        }
        if (!removeChar) newStr += str.slice(i, i + 1);
    }
    return newStr;
}

console.log(
    removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
);
