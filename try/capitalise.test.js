import capitalise from "./capitalise";

test('"test" should become "Test"', () => {
    expect(capitalise('test')).toBe('Test');
});
  
test('"Test" should become "Test"', () => {
    expect(capitalise('Test')).toBe('Test');
});