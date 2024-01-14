import caesarCipher from "./caesarCipher";

test('"abcdefg" becomes "bcdefgh"', () => {
    expect(caesarCipher('abcdefg',1)).toBe('bcdefgh');
});

test('"ABCDEFG" becomes "BCDEFGH"', () => {
    expect(caesarCipher('ABCDEFG',1)).toBe('BCDEFGH');
});
  
test('1 becomes "not a string"', () => {
    expect(caesarCipher(1,1)).toBe('not a string');
});