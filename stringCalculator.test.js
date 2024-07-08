const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns the sum of multiple comma-separated numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("returns 0 for non-numeric strings", () => {
  expect(add("hello")).toBe(0);
});

test("handles spaces in the input string", () => {
  expect(add("1, 2, 3")).toBe(6);
});

test("handles negative numbers", () => {
  expect(add("-1,-2")).toBe(-3);
});

test("handles decimal numbers", () => {
  expect(add("1.5,2.5")).toBe(4);
});

test("handles mixed decimal and integer numbers", () => {
  expect(add("1.5,2,3.5")).toBe(7);
});

test("returns the sum of numbers separated by new lines", () => {
  expect(add("1\n2\n3")).toBe(6);
});

test("returns the sum of numbers separated by both commas and new lines", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should handle complex custom delimiters", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
  expect(add("//[&&]\n4&&5&&6")).toBe(15);
});
