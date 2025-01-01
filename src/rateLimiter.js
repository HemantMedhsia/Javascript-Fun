function rateLimiter(fn, limit) {
    let lastCalled = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCalled < limit) {
            return "Rate limit exceeded";
        }

        lastCalled = now;
        return fn(...args);
    };
}

const sayHello = () => "Hello!";
const limitedSayHello = rateLimiter(sayHello, 2000);

module.exports = { rateLimiter, limitedSayHello };