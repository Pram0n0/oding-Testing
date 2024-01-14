function caesarCipher(str, shift) {
    if (typeof str !== 'string') {
        return 'not a string';
    }

    function isUpperCase(char) {
        return char === char.toUpperCase();
    }

    function isLowerCase(char) {
        return char === char.toLowerCase();
    }

    function shiftChar(char, shift) {
        const charCode = char.charCodeAt(0);
        const offset = isUpperCase(char) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

        if (isUpperCase(char) || isLowerCase(char)) {
            return String.fromCharCode(((charCode - offset + shift) % 26 + 26) % 26 + offset);
        } else {
            return char;
        }
    }

    return str.split('').map((char) => shiftChar(char, shift)).join('');
}

export default caesarCipher;