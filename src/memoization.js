function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Cache hit for:", args);
            return cache.get(key);
        }

        console.log("Cache miss for:", args);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Example: Fibonacci
const fibonacci = memoize(function (n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

module.exports = { memoize, fibonacci };