const { squares, evenNumbers, sum } = require('../src/higherOrderFunctions');

test('Squares are correct', () => {
    expect(squares).toEqual([1, 4, 9, 16, 25]);
});

test('Even numbers are filtered', () => {
    expect(evenNumbers).toEqual([2, 4]);
});

test('Sum of numbers is correct', () => {
    expect(sum).toBe(15);
});