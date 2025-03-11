// Array to store all test cases
export const tests = [];

// Function to define a test
export function test(description, fn) {
  tests.push({ description, fn });
}

// Assertion methods
export const assert = {
  equal(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
  },
  notEqual(actual, expected, message) {
    if (actual === expected) {
      throw new Error(message || `Expected not ${expected}, but got ${actual}`);
    }
  },
  true(value, message) {
    if (value !== true) {
      throw new Error(message || `Expected true, but got ${value}`);
    }
  },
  false(value, message) {
    if (value !== false) {
      throw new Error(message || `Expected false, but got ${value}`);
    }
  },
  deepEqual(actual, expected, message) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
      throw new Error(
        message || `Expected ${expectedStr}, but got ${actualStr}`
      );
    }
  },
};

// Function to run all registered tests
export async function runTests() {
  let passed = 0;
  let failed = 0;
  for (const test of tests) {
    try {
      const result = test.fn();
      if (result instanceof Promise) {
        await result;
      }
      console.log(`✓ ${test.description}`);
      passed++;
    } catch (error) {
      console.error(`✗ ${test.description}`);
      console.error(error.message);
      failed++;
    }
  }
  console.log(`\nTests: ${passed} passed, ${failed} failed`);
}
