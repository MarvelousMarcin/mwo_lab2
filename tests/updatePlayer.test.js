const { updatePlayer } = require("../playerUtils");

test("update empty player id", () => {
  expect(() => updatePlayer()).toThrow("No player giver");
});

test("update empty id type", () => {
  expect(() => updatePlayer({ id: "", name: "Marcin" })).toThrow(
    "No player id"
  );
});

test("update user correctly", () => {
  expect(updatePlayer({ id: "1-XXX", name: "Marcin" })).toBe("Player Updated");
});
