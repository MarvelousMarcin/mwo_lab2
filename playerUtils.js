const myMock = jest.fn();
myMock.mockReturnValue(200);

const addPlayer = (player) => {
  if (!player) {
    throw new Error("Empty player");
  }

  const { id, coachId, name, surname, country, birthDate, height, weight } =
    player;

  if (
    !id ||
    !coachId ||
    !name ||
    !surname ||
    !country ||
    !birthDate ||
    !height ||
    !weight
  ) {
    throw new Error("Wrong player data");
  }

  const status = myMock(id);

  if (status == "200") {
    return "added";
  } else {
    return "error";
  }
};

const removePlayer = (playerId) => {
  if (!playerId) {
    throw new Error("No player Id");
  }
  if (!(typeof playerId == "string")) {
    throw new Error("Wrong id type");
  }

  const status = myMock();

  if (status == "200") {
    return "User deleted";
  } else {
    throw new Error("No user found");
  }
};

const updatePlayer = (player) => {
  const myMock = jest.fn();
  myMock.mockReturnValue(200);

  if (!player) {
    throw new Error("No player giver");
  }

  if (!player.id) {
    throw new Error("No player id");
  }

  if (myMock(player) == "200") {
    return "Player Updated";
  } else {
    throw new Error("Problem with updating");
  }
};

const getPlayer = (playerId) => {
  const myMock = jest.fn();
  myMock.mockReturnValue({
    id: "1-XXX",
    coachId: "2-JKL",
    name: "John",
    surname: "Kowalski",
    country: "Poland",
    birthDate: "13-07-2001",
    height: "187cm",
    weight: "80kg",
  });
  if (!playerId) {
    throw new Error("No player Id");
  }
  if (!(typeof playerId == "string")) {
    throw new Error("Wrong id type");
  }

  return myMock();
};

const getPlayers = (country) => {
  if (!country) {
    throw new Error("No country entered");
  }
  const myMock = jest.fn();
  myMock.mockReturnValue(["1-XYY", "2-XXX"]);
  if (myMock().lenght != 0) {
    return myMock();
  } else {
    return "No player found";
  }
};

module.exports = {
  addPlayer,
  removePlayer,
  updatePlayer,
  getPlayer,
  getPlayers,
};
