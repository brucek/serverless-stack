const { runBuildCommand, clearBuildOutput } = require("../helpers");

beforeEach(async () => {
  await clearBuildOutput(__dirname);
});

afterAll(async () => {
  await clearBuildOutput(__dirname);
});

/**
 * Test that the synth command ran successfully
 */
test("config-no-type", async () => {
  const result = await runBuildCommand(__dirname);

  expect(result).toMatch(/Cannot detect the type of Serverless Stack app/);
});
