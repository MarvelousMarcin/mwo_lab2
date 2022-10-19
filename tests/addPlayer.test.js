const { addPlayer } = require("../playerUtils");
const Player = require("../Player");

test("add new user", () => {
  const player1 = new Player(
    "1-XXX",
    "2-JKL",
    "John",
    "Kowalski",
    "Poland",
    "13-07-2001",
    "187cm",
    "80kg"
  );
  expect(addPlayer(player1)).toBe("added");
});

test("add empty user", () => {
  expect(() => addPlayer()).toThrow("Empty player");
});

test("add user no id", () => {
  const player1 = new Player(
    "",
    "2-JKL",
    "John",
    "Kowalski",
    "Poland",
    "13-07-2001",
    "187cm",
    "80kg"
  );
  expect(() => addPlayer(player1)).toThrow("Wrong player data");
});

test("add wrong no name", () => {
  const player1 = new Player(
    "",
    "2-JKL",
    "",
    "Kowalski",
    "Poland",
    "13-07-2001",
    "187cm",
    "80kg"
  );
  expect(() => addPlayer(player1)).toThrow("Wrong player data");
});
