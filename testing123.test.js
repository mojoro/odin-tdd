import {
  capitalize,
  reverse,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./testing123";

test("Capitalizes string", () => {
  expect(capitalize("greg")).toBe("Greg");
});

test("Reverses string", () => {
  expect(reverse("greg")).toBe("gerg");
});

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

test("Calculator adds", () => {
  expect(Calculator.add(2, 3)).toBe(5);
});
test("Calculator subtracts", () => {
  expect(Calculator.subtract(2, 3)).toBe(-1);
});
test("Calculator divides", () => {
  expect(Calculator.divide(3, 3)).toBe(1);
});
test("Calculator multiplies", () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
});

test("Cipher shifts", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Cipher shifts caps", () => {
  expect(caesarCipher("Abc", 3)).toBe("Def");
});

test("Cipher wraps", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Cipher preserves punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Large shift does not break capital shifting", () => {
  expect(caesarCipher("Abc!", 52)).toBe("Abc!");
});

const arrayToAnalyze = [1, 8, 3, 4, 2, 6];
test("Analyzes array and calculates average", () => {
  expect(analyzeArray(arrayToAnalyze).average).toBe(4);
});

test("Analyzes array and calculates min", () => {
  expect(analyzeArray(arrayToAnalyze).min).toBe(1);
});

test("Analyzes array and calculates max", () => {
  expect(analyzeArray(arrayToAnalyze).max).toBe(8);
});

test("Analyzes array and calculates length", () => {
  expect(analyzeArray(arrayToAnalyze).length).toBe(6);
});

test("Error if not array", () => {
  expect(() => analyzeArray({})).toThrow();
});

test("Error if element is not integer", () => {
  expect(() => analyzeArray([1, 2, 3, "hey"])).toThrow();
});
