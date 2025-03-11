import { runTests } from "./index.js";

async function main() {
  const testFiles = process.argv.slice(2);
  if (testFiles.length === 0) {
    console.error("No test files specified");
    process.exit(1);
  }
  for (const file of testFiles) {
    try {
      await import(file);
    } catch (error) {
      console.error(`Failed to load test file: ${file}`);
      console.error(error);
      process.exit(1);
    }
  }
  await runTests();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
