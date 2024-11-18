import { capitalize, reverse, Calculator } from "./testing123";

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
