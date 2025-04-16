import { Coercion } from '../src';

describe('Coercion', () => {
    describe('boolean', () => {
        it('should return true for truthy values', () => {
            expect(Coercion.boolean('true')).toBe(true);
            expect(Coercion.boolean('1')).toBe(true);
            expect(Coercion.boolean('yes')).toBe(true);
            expect(Coercion.boolean('on')).toBe(true);
        });

        it('should return false for falsy values', () => {
            expect(Coercion.boolean('false')).toBe(false);
            expect(Coercion.boolean('0')).toBe(false);
            expect(Coercion.boolean('no')).toBe(false);
            expect(Coercion.boolean('off')).toBe(false);
        });

        it('should return false for other values', () => {
            expect(Coercion.boolean('random string')).toBe(false);
            expect(Coercion.boolean('123')).toBe(false);
            expect(Coercion.boolean('null')).toBe(false);
            expect(Coercion.boolean('undefined')).toBe(false);
        });
    });

    describe('integer', () => {
        it('should return parsed integer value', () => {
            expect(Coercion.integer('123')).toBe(123);
            expect(Coercion.integer('456')).toBe(456);
            expect(Coercion.integer('789')).toBe(789);
        });

        it('should return default value for non-integer strings', () => {
            expect(Coercion.integer('abc', { default: 10 })).toBe(10);
            expect(Coercion.integer('true', { default: 10 })).toBe(10);
        });

        it('should respect min and max options', () => {
            expect(Coercion.integer('5', { min: 10, max: 20 })).toBe(10);
            expect(Coercion.integer('25', { min: 10, max: 20 })).toBe(20);
        });

        it('should respect radix option', () => {
            expect(Coercion.integer('1010', { radix: 2 })).toBe(10);
            expect(Coercion.integer('A', { radix: 16 })).toBe(10);
        });

        it('should return default value for NaN', () => {
            expect(Coercion.integer('abc', { default: 10 })).toBe(10);
            expect(Coercion.integer('true', { default: 10 })).toBe(10);
        });

        it('should return default value for empty string', () => {
            expect(Coercion.integer('', { default: 10 })).toBe(10);
            expect(Coercion.integer('', { default: 0 })).toBe(0);
        });
    });

    describe('positiveInteger', () => {
        it('should return parsed positive integer value', () => {
            expect(Coercion.positiveInteger('123')).toBe(123);
            expect(Coercion.positiveInteger('456')).toBe(456);
            expect(Coercion.positiveInteger('789')).toBe(789);
        });

        it('should return default value for non-positive integers', () => {
            expect(Coercion.positiveInteger('-5', { default: 10 })).toBe(10);
            expect(Coercion.positiveInteger('0', { default: 10 })).toBe(10);
        });

        it('should respect min and max options', () => {
            expect(Coercion.positiveInteger('5', { min: 10, max: 20 })).toBe(
                10
            );
            expect(Coercion.positiveInteger('25', { min: 10, max: 20 })).toBe(
                20
            );
        });

        it('should respect radix option', () => {
            expect(Coercion.positiveInteger('1010', { radix: 2 })).toBe(10);
            expect(Coercion.positiveInteger('A', { radix: 16 })).toBe(10);
        });

        it('should return default value for NaN', () => {
            expect(Coercion.positiveInteger('abc', { default: 10 })).toBe(10);
            expect(Coercion.positiveInteger('true', { default: 10 })).toBe(10);
        });

        it('should return default value for empty string', () => {
            expect(Coercion.positiveInteger('', { default: 10 })).toBe(10);
            expect(Coercion.positiveInteger('', { default: 0 })).toBe(0);
        });
    });

    describe('float', () => {
        it('should return parsed float value', () => {
            expect(Coercion.float('123.45')).toBe(123.45);
            expect(Coercion.float('456.78')).toBe(456.78);
            expect(Coercion.float('789.01')).toBe(789.01);
        });

        it('should return default value for non-float strings', () => {
            expect(Coercion.float('abc', { default: 10.5 })).toBe(10.5);
            expect(Coercion.float('true', { default: 10.5 })).toBe(10.5);
        });

        it('should respect min and max options', () => {
            expect(Coercion.float('5.5', { min: 10, max: 20 })).toBe(10);
            expect(Coercion.float('25.5', { min: 10, max: 20 })).toBe(20);
        });

        it('should return default value for NaN', () => {
            expect(Coercion.float('abc', { default: 10.5 })).toBe(10.5);
            expect(Coercion.float('true', { default: 10.5 })).toBe(10.5);
        });

        it('should return default value for empty string', () => {
            expect(Coercion.float('', { default: 10.5 })).toBe(10.5);
            expect(Coercion.float('', { default: 0 })).toBe(0);
        });
    });

    describe('positiveFloat', () => {
        it('should return parsed positive float value', () => {
            expect(Coercion.positiveFloat('123.45')).toBe(123.45);
            expect(Coercion.positiveFloat('456.78')).toBe(456.78);
            expect(Coercion.positiveFloat('789.01')).toBe(789.01);
        });

        it('should return default value for non-positive floats', () => {
            expect(Coercion.positiveFloat('-5.5', { default: 10.5 })).toBe(
                10.5
            );
            expect(Coercion.positiveFloat('0', { default: 10.5 })).toBe(10.5);
        });

        it('should respect min and max options', () => {
            expect(Coercion.positiveFloat('5.5', { min: 10, max: 20 })).toBe(
                10
            );
            expect(Coercion.positiveFloat('25.5', { min: 10, max: 20 })).toBe(
                20
            );
        });

        it('should return default value for NaN', () => {
            expect(Coercion.positiveFloat('abc', { default: 10.5 })).toBe(10.5);
            expect(Coercion.positiveFloat('true', { default: 10.5 })).toBe(
                10.5
            );
        });

        it('should return default value for empty string', () => {
            expect(Coercion.positiveFloat('', { default: 10.5 })).toBe(10.5);
            expect(Coercion.positiveFloat('', { default: 0 })).toBe(0);
        });
    });
});
