import { describe, it, expect } from "vitest";
import { evenOrOdd } from "../../src/playground";

describe("basic math", () => {
  it("adds two number", () => {
    // assertion
    expect(1 + 1).toBe(2);
  });

  describe("evenOrOdd", (number) => {
    it("indicates the number is even", () => {
      expect(evenOrOdd(2)).toBe("Even");
    });
    it("indicates the number is odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });
});
