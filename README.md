Minimalist testing module for Node.js, simple assertions and seamless ES module support.

## Install

```bash
npm install rig-test
```

## Usage

Write tests in a file (e.g., `test.js`):

```javascript
import { test, assert } from "rig-test";

test("addition works", () => {
  assert.equal(1 + 1, 2);
});

test("async works", async () => {
  const result = await Promise.resolve(42);
  assert.equal(result, 42);
});
```

Run them:

```bash
node test.js
```

Output:

```
✓ addition works
✓ async works
Tests: 2 passed, 0 failed
```

## Features

- Simple assertions: `equal`, `notEqual`, `true`, `false`, `deepEqual`
- Native ES module support
- Async-friendly
- No bloat, just tests

## Info

Full API Docs: Coming Soon
License: ISC
Author: Adam Ballinger
