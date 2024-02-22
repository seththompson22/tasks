import { parse } from "path";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // if length >= 1, filter array and return only first and last
    // else means length == 0, return an empty array

    if (numbers.length > 1) {
        return numbers.filter(
            (num: number): boolean =>
                num == numbers[0] || num == numbers[numbers.length - 1]
        );
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const no_dollar_signs: string[] = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.substring(1) : amount
    );
    return no_dollar_signs.map((num: string) =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // filter out ?, then map strings to uppercase if they end in !
    const no_question: string[] = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    return no_question.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return (
        colors.filter(
            (color: string): boolean =>
                color != "red" && color != "blue" && color != "green"
        ).length == 0
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // find "sum=" then concatinate all integers in 'int+int+int' form
    let sum = 0;
    addends.map((value: number): number => {
        sum += value;
        return value;
    });
    let str_nums: string = addends.join("+");
    if (addends.length == 0) {
        str_nums = "0";
    }
    return sum.toString() + "=" + str_nums;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //check for negative
    //if no negative, then add sum to end
    // if negative, add sum before negative after the negative
    if (values.length === 0) {
        return [0];
    }
    const neg_index: number = values.findIndex(
        (val: number): boolean => val < 0
    );
    let index = 0;
    if (neg_index === -1) {
        // use length of negative
        index = values.length;
        const sum: number = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, sum];
    } else {
        index = neg_index;
        const beginning: number[] = values.filter(
            (val: number, curr_i: number): boolean => curr_i <= index
        );
        const end: number[] = values.filter(
            (val: number, curr_i: number): boolean => curr_i > index
        );
        let sum = 0;
        beginning.map((value: number, curr_i: number): number => {
            if (curr_i < beginning.length - 1) {
                sum += value;
            }
            return value;
        });
        return [...beginning, sum, ...end];
    }
}
