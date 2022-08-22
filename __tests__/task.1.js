const rewire = require('rewire');

describe("Function", () => {
    test("`fibonacci` should be defined", () => {
        const fibonacci = rewire('../index.js').__get__('fibonacci');
        expect(fibonacci).toBeDefined();
    });
    test("`fibonacci` should be a function", () => {
        const fibonacci = rewire('../index.js').__get__('fibonacci');
        expect(typeof fibonacci).toBe('function');
    });
});
describe('Fibonacci', () => {
    test("`fibonacci` should return an array", () => {
        const fibonacci = rewire('../index.js').__get__('fibonacci');
        const result = fibonacci(0)
        expect(Array.isArray(result)).toBeTruthy()
    });
    test("`fibonacci` should return the fibonacci sequence based on the passed number", () => {
        const fibonacci = rewire('../index.js').__get__('fibonacci');
        expect(fibonacci(0)).toEqual([0]);
        expect(fibonacci(1)).toEqual([0, 1]);
        expect(fibonacci(3)).toEqual([0, 1, 1, 2]);
        expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    });
});