// Add Product
test("add product good", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(200);

  const product = {
    name: "Computer",
    model: "XYZ",
    price: "2000",
    year: "2022",
  };
  const result = myMock(product);

  expect(result).toBe(200);
});

test("add that exists", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(400);

  const product = {
    name: "Computer",
    model: "XYZ",
    price: "2000",
    year: "2022",
  };
  const result = myMock(product);

  expect(result).toBe(400);
});

test("add empty product", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(400);

  const product = {};
  const result = myMock(product);

  expect(result).toBe(400);
});

test("add product with wrong date", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(400);

  const product = {
    name: "Computer",
    model: "XYZ",
    price: "2000",
    year: "000",
  };
  const result = myMock(product);

  expect(result).toBe(400);
});

// Delete Product

test("delete product with good id", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(200);

  const product = {
    id: "1-XYZ",
  };
  const result = myMock(product);

  expect(result).toBe(200);
});

test("delete product with empty id", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(400);

  const product = {};
  const result = myMock(product);

  expect(result).toBe(400);
});

test("delete product with empty not existing id", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(404);

  const product = {
    id: "404",
  };
  const result = myMock(product);

  expect(result).toBe(404);
});

// Set Promotion on Product

test("set promotion ok", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(200);

  const product = { id: "1-eeee" };
  const result = myMock(product, true);

  expect(result).toBe(200);
});

test("set promotion ok2", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(200);

  const product = { id: "1-eeee" };
  const result = myMock(product, false);

  expect(result).toBe(200);
});

test("set promotion without boolean", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(400);

  const product = { id: "1-eeee" };
  const result = myMock(product);

  expect(result).toBe(400);
});

test("set promotion without id", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(400);

  const product = { id: "1-eeee" };
  const result = myMock(false);

  expect(result).toBe(400);
});
