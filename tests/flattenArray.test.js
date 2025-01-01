const { flattenArray } = require('../src/flattenArray');

test('Flatten nested arrays', () => {
    const input = [1, [2, [3, 4]], 5];
    const output = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(output);
});

test('Flatten already flat array', () => {
    const input = [1, 2, 3];
    const output = [1, 2, 3];
    expect(flattenArray(input)).toEqual(output);
});