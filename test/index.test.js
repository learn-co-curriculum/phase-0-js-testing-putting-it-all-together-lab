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
        
    });

    test('subtract function should return correct difference', () => {
        
    });

    test('multiply function should return correct product', () => {
        
    });

    test('divide function should return correct quotient', () => {
        
    });

    test('divide function should throw error when dividing by zero', () => {
        
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
        
    });

    test('logSubtraction function should log correct subtraction result', () => {
        
        expect(consoleSpy).toHaveBeenCalledWith("Subtract: 5");
    });

    test('logMultiplication function should log correct multiplication result', () => {

    });

    test('logDivision function should log correct division result', () => {

    });
});
