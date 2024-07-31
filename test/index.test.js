const {
    add,
    subtract,
    multiply,
    divide,
    logAddition,
    logSubtraction,
    logMultiplication,
    logDivision
} = require('../index');

describe('Math Functions', () => {
    const num1 = 10;
    const num2 = 5;

    test('add function should return correct sum', () => {
        expect(add(num1, num2)).toBe(15);
    });

    test('subtract function should return correct difference', () => {
        expect(subtract(num1, num2)).toBe(5);
    });

    test('multiply function should return correct product', () => {
        expect(multiply(num1, num2)).toBe(50);
    });

    test('divide function should return correct quotient', () => {
        expect(divide(num1, num2)).toBe(2);
    });

    test('divide function should throw error when dividing by zero', () => {
        expect(() => divide(num1, 0)).toThrow("Division by zero is not allowed.");
    });
});

describe('Log Functions', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    afterEach(() => {
        consoleSpy.mockClear();
    });

    afterAll(() => {
        consoleSpy.mockRestore();
    });

    test('logAddition function should log correct addition result', () => {
        logAddition();
        expect(consoleSpy).toHaveBeenCalledWith("Add: 15");
    });

    test('logSubtraction function should log correct subtraction result', () => {
        logSubtraction();
        expect(consoleSpy).toHaveBeenCalledWith("Subtract: 5");
    });

    test('logMultiplication function should log correct multiplication result', () => {
        logMultiplication();
        expect(consoleSpy).toHaveBeenCalledWith("Multiply: 50");
    });

    test('logDivision function should log correct division result', () => {
        logDivision();
        expect(consoleSpy).toHaveBeenCalledWith("Divide: 2");
    });
});
