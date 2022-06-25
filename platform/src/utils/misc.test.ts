import { normalizePort } from "./misc";

describe("normalizePort", () => {
  it("should return the default port when called with a invalid string", () => {
    expect(normalizePort("test")).toBe(3000);
  });

  it("should return provided port when called with a valid string", () => {
    expect(normalizePort("4000")).toBe(4000);
  });

  it("should return the default port when called with a minus number", () => {
    expect(normalizePort("-4000")).toBe(3000);
  });
});
