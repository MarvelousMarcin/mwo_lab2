const { getPlayer } = require("../playerUtils");

test("get empty player id", () => {
  expect(() => getPlayer()).toThrow("No player Id");
});

test("get empty wrong id type", () => {
  expect(() => getPlayer(12)).toThrow("Wrong id type");
});

test("get user correctly", () => {
  expect(getPlayer("1-XXX")).toStrictEqual({
    id: "1-XXX",
    coachId: "2-JKL",
    name: "John",
    surname: "Kowalski",
    country: "Poland",
    birthDate: "13-07-2001",
    height: "187cm",
    weight: "80kg",
  });
});
