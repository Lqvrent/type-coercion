export class Coercion {
    static boolean(value: string): boolean {
        const truthyValues = ['true', '1', 'yes', 'on'];

        if (truthyValues.includes(value.toLowerCase())) {
            return true;
        }

        return false;
    }

    static integer(
        value: string,
        options?: {
            default?: number;
            min?: number;
            max?: number;
            radix?: number;
        }
    ): number {
        const { default: defaultValue = 0, min, max, radix = 10 } =
            options || {};

        const parsedValue = parseInt(value, radix);

        if (isNaN(parsedValue)) {
            return defaultValue;
        }

        if (min !== undefined && parsedValue < min) {
            return min;
        }

        if (max !== undefined && parsedValue > max) {
            return max;
        }

        return parsedValue;
    }

    static positiveInteger(
        value: string,
        options?: {
            default?: number;
            min?: number;
            max?: number;
            radix?: number;
        }
    ): number {
        const { default: defaultValue = 0, min = 1, max, radix = 10 } =
            options || {};

        const parsedValue = parseInt(value, radix);

        if (isNaN(parsedValue) || parsedValue <= 0) {
            return defaultValue;
        }

        if (min !== undefined && parsedValue < min) {
            return min;
        }

        if (max !== undefined && parsedValue > max) {
            return max;
        }

        return parsedValue;
    }
}
