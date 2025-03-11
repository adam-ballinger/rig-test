import { test, assert } from "./index.js"; // Adjust path if installed via npm

// Simple synchronous test
test("addition works", () => {
  assert.equal(1 + 1, 2, "1 + 1 should equal 2");
});

// Test with object comparison
test("objects are equal", () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };
  assert.deepEqual(obj1, obj2);
});

// Asynchronous test
test("async operation", async () => {
  const result = await Promise.resolve(42);
  assert.equal(result, 42);
});

// Failing test example
test("should fail", () => {
  assert.equal(1 + 1, 3, "This will fail");
});
