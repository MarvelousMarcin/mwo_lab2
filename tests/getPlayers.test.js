const { getPlayers } = require("../playerUtils");

test("get empty country", () => {
  expect(() => getPlayers()).toThrow("No country entered");
});

test("get users correctly", () => {
  expect(getPlayers("Poland")).toStrictEqual(["1-XYY", "2-XXX"]);
});
