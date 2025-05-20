const { reverseString, isPalindrome, truncateString, countCharacters } = require('../src/stringUtils.js');

describe("reverseString", () => {
    test("should reverse a string", () => {
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("world")).toBe("dlrow");
        expect(reverseString("")).toBe("");
        expect(reverseString("a")).toBe("a");
    });

    test("should handle special characters", () => {
        expect(reverseString("!@#$%^&*()")).toBe(")(*&^%$#@!");
    });

    test("should handle spaces", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
    });
});

describe("isPalindrome", () => {
    test("should return true for palindromes", () => {
        expect(isPalindrome("madam")).toBe(true);
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("")).toBe(true);
        expect(isPalindrome("a")).toBe(true);
    });

    test("should return false for non-palindromes", () => {
        expect(isPalindrome("hello")).toBe(false);
        expect(isPalindrome("world")).toBe(false);
    });

    test("should handle spaces", () => {
        expect(isPalindrome("Was saW")).toBe(true);
    });
});

describe("truncateString", () => {
    test("should truncate a string to a maximum length", () => {
        expect(truncateString("hello world", 5)).toBe("hello...");
        expect(truncateString("hello", 10)).toBe("hello");
        expect(truncateString("", 5)).toBe("");
    });

    test("should handle special characters", () => {
        expect(truncateString("!@#$%^&*()", 5)).toBe("!@#$%...");
    });

    test("should handle spaces", () => {
        expect(truncateString("hello world", 5)).toBe("hello...");
    });
});

describe("countCharacters", () => {
    test("should count characters in a string", () => {
        expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
        expect(countCharacters("")).toEqual({});
        expect(countCharacters("a")).toEqual({ a: 1 });
    });

    test("should handle special characters", () => {
        expect(countCharacters("!@#$%^&*()")).toEqual({ '!': 1, '@': 1, '#': 1, '$': 1, '%': 1, '^': 1, '&': 1, '*': 1, '(': 1, ')': 1 });
    });

    test("should handle spaces", () => {
        expect(countCharacters("hello world")).toEqual({ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 });
    });
});