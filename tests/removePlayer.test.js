const { removePlayer } = require("../playerUtils");

test("remove empty player id", () => {
  expect(() => removePlayer()).toThrow("No player Id");
});

test("remove empty wrong id type", () => {
  expect(() => removePlayer(12)).toThrow("Wrong id type");
});

test("remove user correctly", () => {
  expect(removePlayer("1-XXX")).toBe("User deleted");
});
