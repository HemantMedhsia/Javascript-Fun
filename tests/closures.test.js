const { createCounter } = require('../src/closures');

test('Counter increments correctly', () => {
    const counter = createCounter();
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
});