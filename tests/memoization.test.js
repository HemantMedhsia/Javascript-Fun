const { memoize, fibonacci } = require('../src/memoization');

test('Fibonacci memoization works', () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(15)).toBe(610);
});

test('Cache hit is faster', () => {
    const testFn = jest.fn(n => n * n);
    const memoizedFn = memoize(testFn);

    expect(memoizedFn(4)).toBe(16);
    expect(testFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(4)).toBe(16);
    expect(testFn).toHaveBeenCalledTimes(1); // Cache hit, no new calls
});