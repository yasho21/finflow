import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("pads cents", () => {
    expect(formatCurrency(142.5)).toBe("$142.50");
  });

  it("adds thousands separators", () => {
    expect(formatCurrency(5200)).toBe("$5,200.00");
  });

  it("rounds to the nearest cent", () => {
    expect(formatCurrency(0.005)).toBe("$0.01");
  });
});