import { evenOrOdd, multiply } from "../../src/playground";

describe("basic math", () => {
  it("adds two number", () => {
    // assertion
    expect(1 + 1).toBe(2);
  });

  describe("evenOrOdd", () => {
    it("indicates the number is even", () => {
      expect(evenOrOdd(2)).toBe("Even");
    });
    it("indicates the number is odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });
  describe("multiply", () => {
    it("multiplies two numbers together", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
